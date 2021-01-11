export function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let temp = [];
  while (left.length && right.length) {
    temp.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  while (left.length) {
    temp.push(left.shift());
  }
  while (right.length) {
    temp.push(right.shift());
  }
  return temp;
}
