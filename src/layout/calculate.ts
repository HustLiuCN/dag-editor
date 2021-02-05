import { buildData } from './format'

export function figure(data) {
  let { nodes, edges } = data
  edges = cutToDag(edges)
  const tmp = buildData({ nodes, edges })
  nodes = tmp.nodes
  const layout = getDepth(nodes, edges)

  return format({ nodes, edges, layout })
}

// 去环, 转换为标准 DAG
function cutToDag(edges) {
  const i = edges.findIndex(e => e.target.toUpperCase().match(/ROOT/))
  if (i > -1) {
    edges.splice(i, 1)
  }
  return edges
}

// 计算深度
function getDepth(nodes, allEdges) {
  const edges = allEdges.slice()
  // 入度表 { node_id: input_count }
  const inMap = {}
  // 父节点字典 { node_id: [ parent_id ] }
  const parentsMap = {}
  // 子节点字典 { node_id: [ child_id ] }
  const childrenMap = {}
  // 层级字典
  const levels = {}
  // 初始化几个关键字典
  for (let n of nodes) {
    const { id } = n
    inMap[id] = 0
    parentsMap[id] = []
    childrenMap[id] = []
  }
  for (let e of edges) {
    let s = e.source
    let t = e.target
    // 入度
    inMap[t] ++
    // 父节点
    parentsMap[t].push(s)
    // 子节点
    childrenMap[s].push(t)
  }

  // 几个方法
  // node_id => node
  const findNode = id => {
    return nodes.find(n => n.id === id)
  }
  // parent_id => [ child ]
  const findChildren = id => {
    return childrenMap[id]
  }
  const findChildrenByLevel = (id, lv) => {
    return findChildren(id).filter(c => levels[lv] && levels[lv].indexOf(c) > -1)
  }
  // child_id => [ parent ]
  const findParents = id => {
    return parentsMap[id]
  }
  const findParentsByLevel = (id, lv) => {
    return findParents(id).filter(c => levels[lv] && levels[lv].indexOf(c) > -1)
  }

  // 根节点
  const root = getRoot(inMap)
  const rootNode = findNode(root)

  // 计算每个节点的最大深度
  const getNodeDepth = id => {
    const parents = findParents(id)
    return parents.length ? Math.max.apply(null, parents.map(pid => findNode(pid)['depth'])) + 1 : 0
  }
  const queue = []
  queue.push(root)
  while (queue.length) {
    // 从队列中取出当前入度为 0 的节点
    let curId = queue.pop()
    // 记录, 得出 cur 的深度, 入度为 0 意味着其父节点均已遍历过
    let cur = findNode(curId)
    cur.depth = getNodeDepth(curId)
    // 查找 cur 的子节点
    const children = findChildren(curId)
    children.forEach(c => {
      inMap[c] --
      if (inMap[c] === 0) {
        queue.push(c)
      }
    })
  }

  // 层级
  for (let node of nodes) {
    let { depth, id } = node
    if (!levels.hasOwnProperty(depth)) {
      levels[depth] = []
    }
    levels[depth].push(id)
  }
  // 层内排序
  const getParentsOrders = (ids, lv) => {
    const list = levels[lv]
    return ids.reduce((total, cur) => total + list.indexOf(cur), 0)
  }
  for (let l in levels) {
    const lv = Number(l)
    const list = levels[l]
    if (lv > 0) {
      list.sort((a, b) => {
        let pa = findParentsByLevel(a, lv - 1)
        let pb = findParentsByLevel(b, lv - 1)
        return getParentsOrders(pa, lv - 1) - getParentsOrders(pb, lv - 1)
      })
    }
  }
  // 以 node 为根的类树的宽度
  const getWidth = (nid, l) => {
    const lv = Number(l)
    const children = findChildrenByLevel(nid, lv + 1)
    if (!children.length) {
      const node = findNode(nid)
      node.hasNoSon = true
      return 1
    }
    return children.reduce((total, cur) => {
      return total + getWidth(cur, lv + 1)
    }, 0)
  }
  for (let l in levels) {
    const lv = Number(l)
    const list = levels[l]
    list.forEach(id => {
      const node = findNode(id)
      node.treeWidth = getWidth(id, lv)
    })
  }

  const ox = 400
  const oy = 40
  const ow = 100
  const oh = 80
  const gw = 10
  rootNode.x = ox
  rootNode.y = oy
  // 按层级定位
  const getGapCount = id => {
    const node = findNode(id)
    return childrenMap[id].length - findChildrenByLevel(id, node.depth + 1).length
  }
  // 寻找树里有多少条跨级边
  const getTreeGapCount = id => {
    let n = 0
    const node = findNode(id)
    if (node.hasNoSon) {
      return n
    }
    n = getGapCount(id)
    const children = findChildrenByLevel(id, node.depth + 1)
    return n + children.reduce((total, cur) => {
      return total + getTreeGapCount(cur)
    }, 0)
  }
  // 判断父节点是否有跨级边且不是连向自己
  const checkParentGap = (cid, pid) => {
    const gapCount = getGapCount(pid)
  }
  for (let l in levels) {
    const lv = Number(l)
    const list = levels[l]
    list.forEach(id => {
      const node = findNode(id)
      node.gapCount = getTreeGapCount(id)
    })
  }
  for (let l in levels) {
    const lv = Number(l)
    const list = levels[l]

    list.forEach(pid => {
      const par = findNode(pid)

      let sx = par.x - par.treeWidth * ow / 2 - par.gapCount * gw

      const children = findChildrenByLevel(pid, lv + 1)

      children.forEach((c, i) => {
        const child = findNode(c)
        if (!child.hasOwnProperty('x') || !child.hasOwnProperty('y')) {
          if (i === 0) {
            child.x = sx + child.treeWidth * ow / 2
            if (getGapCount(pid)) {
              child.x += gw
            }
          } else {
            const prev = findNode(children[i - 1])
            child.x = prev.x + prev.treeWidth * ow / 2 + child.treeWidth * ow / 2
          }

          child.x += child.gapCount * gw

          child.y = par.y + oh
        }
      })
    })
  }

  console.log(levels, nodes);
  return { levels, childrenMap, parentsMap }
}
// 寻找入度为0的节点
function getRoot(nodesMap) {
  return Object.keys(nodesMap).filter(n => nodesMap[n] === 0)[0]
}


// 格式化填充 editor 要求数据字段
export function format({ nodes, edges, layout }) {
  return {
    nodes: nodes.map(n => {
      return {
        ...n,
        shape: 'shape-001',
        w:80,
        h:40,
        anchors:{input:1,output:1},
        // position
        // x: (n.order + 1) * 200,
        // y: (n.depth + 1) * 80,
      }
    }),
    edges: edges.map(e => {
      return {
        ...e,
        id: `edge-${e.name}`,
        sourceAnchorIndex: 0,
        targetAnchorIndex: 0,
      }
    }),
    layout,
  }
}

// 查找最宽层级
export function findMaxLevel(levels, start, end) {
  let max = start
  for (let i = start; i < end; i ++) {
    max = levels[max].length > levels[i].length ? max : i
  }
  return max
}
