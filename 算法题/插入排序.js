export function insertionSort(source) {
  for (let i = 0; i < source.length; i++) {
    let temp = source[i];
    let j = i;
    while (j > 0) {
      if (temp < source[j - 1]) {
        source[j] = source[j - 1];
      } else {
        break;
      }
      j--;
    }
    source[j] = temp;
  }

  return source;
}
