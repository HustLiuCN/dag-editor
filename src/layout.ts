const layout = ({ nodes, edges }) => {
  // TODO 成环的一条特殊标记
  const [brims, circle] = cutToDag(edges)

  // 初始化
  // 入度表 { node_id: input_count }
  const inMap = {}
  // 父节点表 { node_id: [ parent_id ] }
  const parentsMap = {}
  // 子节点表 { node_id: [ child_id ] }
  const childrenMap = {}
  // 层级表
  const levels = {}
  // 初始化构建
  for (let node of nodes) {
    const { id } = node
    inMap[id] = 0
    parentsMap[id] = []
    childrenMap[id] = []
  }
  for (let br of brims) {
    const s = br.source
    const t = br.target
    inMap[t] ++
    parentsMap[t].push(s)
    childrenMap[s].push(t)
  }
  // root
  const ox = 400
  const oy = 40
  const ow = 100
  const oh = 80
  const gw = 10
  const root = Object.keys(inMap).find(k => inMap[k] === 0)
  const rootNode = findNode(root)
  rootNode.x = ox
  rootNode.y = oy
  // 计算节点深度, 由上自下
  const figureDepth = () => {
    const queue = [ root ]

    const getNodeDepth = id => {
      const parents = findParents(id)
      return parents.length ? Math.max.apply(null, parents.map(p => findNode(p)['depth'])) + 1 : 0
    }

    while (queue.length) {
      const cur = queue.pop()
      const curNode = findNode(cur)

      const depth = getNodeDepth(cur)
      curNode.depth = depth
      if (!levels.hasOwnProperty(depth)) {
        levels[depth] = []
      }
      levels[depth].push(cur)

      const children = findChildren(cur)
      children.forEach(child => {
        inMap[child] --
        if (inMap[child] === 0) {
          queue.push(child)
        }
      })
    }
  }
  figureDepth()
  // 层内梳理
  const figureLevelInside = () => {
    // 排序
    const getFathersTotalOrder = (id, lv) => {
      if (lv < 2) {
        return 0
      }
      const ids = findFathers(id)
      const list = levels[lv - 1]
      return ids.reduce((total, cur) => total + list.indexOf(cur), 0)
    }
    // 宽度
    const getWidth = id => {
      const node = findNode(id)
      if (node.hasOwnProperty('treeWidth')) {
        return node.treeWidth
      }
      const sons = findSons(id)
      if (!sons.length) {
        node.hasNoSon = true
        node.treeWidth = 1
      } else {
          node.treeWidth = sons.reduce((total, cur) => total + getWidth(cur), 0)
      }
      return node.treeWidth
    }
    // 跨级线, 没有子节点的节点连出的跨级线不占用横向空间, 不计算入内
    const getTreeGapCount = id => {
      const node = findNode(id)
      if (node.hasOwnProperty('gapCount')) {
        return node.gapCount
      }
      if (node.hasNoSon) {
        node.gapCount = 0
      } else {
        const sons = findSons(id)
        node.gapCount = getGapCount(id) + sons.reduce((total, cur) => total + getTreeGapCount(cur), 0)
      }

      return node.gapCount
    }

    console.time('figure_level')
    Object.keys(levels).sort((a, b) => Number(a) - Number(b)).forEach(l => {
      const lv = Number(l)
      levels[l].sort((a, b) => {
        const ca = findChildren(a)
        const cb = findChildren(b)
        const pa = getFathersTotalOrder(a, lv)
        const pb = getFathersTotalOrder(b, lv)

        if (pa !== pb) {
          return pa - pb
        }
        return cb.length - ca.length
      })

      levels[l].forEach(id => {
        getWidth(id)
        getTreeGapCount(id)
        // 计算坐标
        const node = findNode(id)
        const sx = node.x - node.treeWidth * ow / 2 - node.gapCount * gw
        const sons = findSons(id)
        sons.forEach((c, i) => {
          const child = findNode(c)
          if (!child.hasOwnProperty('x') || !child.hasOwnProperty('y')) {
            if (i === 0) {
              child.x = sx + child.treeWidth * ow / 2
              if (getGapCount(id)) {
                child.x += gw
              }
            } else {
              const prev = findNode(sons[i - 1])
              child.x = prev.x + prev.treeWidth * ow / 2 + child.treeWidth * ow / 2
            }
            child.x += child.gapCount * gw
            child.y = node.y + oh
          }
        })
      })
    })
    console.timeEnd('figure_level')
  }
  figureLevelInside()
  console.log(nodes);
  // utils
  // node_id => node
  function findNode(id) {
    return nodes.find(n => n.id === id)
  }
  // node_id => [ child ]
  function findChildren(id) {
    return childrenMap[id]
  }
  // node_id => [ son ]
  function findSons(id) {
    const node = findNode(id)
    return findChildren(id).filter(c => levels[node.depth + 1] && levels[node.depth + 1].indexOf(c) > -1)
  }
  // node_id => [ parent ]
  function findParents(id) {
    return parentsMap[id]
  }
  // node_id => [ father ]
  function findFathers(id) {
    const node = findNode(id)
    return findParents(id).filter(p => levels[node.depth - 1] && levels[node.depth - 1].indexOf(p) > -1)
  }
  // node_id => gap edge
  function getGapCount(id) {
    return childrenMap[id].length - findSons(id).length
  }
  function cutToDag(edges) {
    const i = edges.findIndex(e => e.target.toUpperCase().match(/ROOT/))
    let circle = []
    if (i > -1) {
      circle = edges.splice(i, 1)
    }
    return [edges, circle]
  }

  return format({ nodes, edges, layout: { levels, childrenMap, parentsMap, circle }})
}

// 格式化填充 editor 要求数据字段
function format({ nodes, edges, layout }) {
  return {
    nodes: nodes.map(n => {
      return {
        ...n,
        name: n.label,
        w:80,
        h:40,
        anchors: { input:1, output:1 },
      }
    }),
    edges: edges.map(e => {
      return {
        ...e,
        id: `edge-${e.name}`,
        sourceAnchorIndex: 0,
        targetAnchorIndex: 0,
        name: e.label,
      }
    }),
    layout,
  }
}

export default layout
