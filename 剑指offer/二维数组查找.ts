/**
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * @param {number} target
 * @param {Array<number[]>} array
 */
export function searchInRowColumn(target, array) {
  const n = array.length,
    m = array[0].length;
  let row = n - 1,
    col = 0;
  if (m === 0 && n === 0) {
    return false;
  }
  while (row >= 0 && col <= m - 1) {
    if (array[row][col] > target) {
      row--;
    } else if (array[row][col] < target) {
      col++;
    } else {
      return true;
    }
  }

  return false;
}
