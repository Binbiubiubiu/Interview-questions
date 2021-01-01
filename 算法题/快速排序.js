export function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let left = [];
  let right = [];
  let mid = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < mid) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)];
}
