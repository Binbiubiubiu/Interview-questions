export function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (array[mid] < item) {
      low = mid + 1;
    } else if (array[mid] > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
