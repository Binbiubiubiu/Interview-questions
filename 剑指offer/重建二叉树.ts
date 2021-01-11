// function TreeNode(x) {
//   this.val = x;
//   this.left = null;
//   this.right = null;
// }

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回
 *
 * @param pre
 * @param vin
 */
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }

  // 前序第一个是根节点，也是中序左右子数的分割点
  const index = vin.indexOf(pre[0]),
    left = vin.slice(0, index),
    right = vin.slice(index);
  return {
    val: pre[0],
    // 递归左右子树的前序、中序
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right),
  };
}
