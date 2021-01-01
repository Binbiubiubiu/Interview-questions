export function selectSort(source) {
  for (let i = 0; i < source.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < source.length; j++) {
      if (source[j] < source[indexMin]) {
        indexMin = j;
      }
    }

    const temp = source[i];
    source[i] = source[indexMin];
    source[indexMin] = temp;
  }
  return source;
}
