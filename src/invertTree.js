/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root
  invertTree(root.left)
  invertTree(root.right)
  ;[root.left, root.right] = [root.right, root.left]
  return root
}

invertTree()
