export function getLeavesCount(tree) {
  if (tree.count !== undefined) {
      return tree.count
  }

  tree.count = 0
  const { children } = tree
  if (!children) {
      tree.count ++
  } else {
      for (let i = 0, n = children.length; i < n; i ++) {
          tree.count += getLeavesCount(children[i])
      }
  }
  return tree.count
}

export function figureNodeLevel(node, lvl = 0) {
  node.level = lvl
  node.count = getLeavesCount(node)
  if (!node.children) {
      return false
  }
  for (let i = 0, n = node.children.length; i < n; i ++) {
      figureNodeLevel(node.children[i], lvl + 1)
  }
}