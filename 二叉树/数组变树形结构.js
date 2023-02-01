const transform = function (arr) {
  const lastNode = []
  const map = new Map()
  const tree = {
    id: arr[0].id,
    name: arr[0].name,
    children: []
  }
  for (let i = 1; i < arr.length; i++) {
    findParent(tree, {
      id: arr[i].id,
      name: arr[i].name,
      children: [],
      parentId: arr[i].parentId
    }, lastNode, true, map)
  }
  for (const lastNodeElement of lastNode) {
    findParent(tree, lastNodeElement, lastNode, false, map)
  }
  return tree
}
// 找到父节点
const findParent = function (tree, node, lastNode, flag = true, map) {
  if (tree.id === node.parentId) {
    tree.children.push({...node})
    !map.has(node.id) && map.set(node.id, node.name)
  } else {
    if (tree.children.length > 0) {
      for (const treeElement of tree.children) {
        findParent(treeElement, node, lastNode, flag, map)
      }
    } else {
      !map.has(node.id) && flag && lastNode.push(node)
    }
  }
}
const tree = transform([
  {id: 1, name: "i1"},
  {id: 2, name: "i2", parentId: 1},
  {id: 5, name: "i5", parentId: 1},
  {id: 3, name: "i3", parentId: 2},
  {id: 4, name: "i4", parentId: 3},
])
// const tree =transform([
//   {id: 1, name: "i1"},
//   {id: 2, name: "i2", parentId: 1},
//   {id: 4, name: "i4", parentId: 3},
//   {id: 3, name: "i3", parentId: 2},
// ])

// const tree = transform([
//   {id: "a", name: "i1"},
//   {id: 2, name: "i2", parentId: "a"},
//   {id: 4, name: "i4", parentId: 3},
//   {id: 3, name: "i3", parentId: 2},
//   {id: 11, name: "i11", parentId: "ufo"},
// ])

console.dir(tree, {depth: null})
