export function bubbleSort01(source) {
  for (let i = 0; i < source.length - 1; i++) {
    for (let j = 0; j < source.length - 1 - i; j++) {
      if (source[j] > source[j + 1]) {
        //   let tmp = source[j];
        //   source[j] = source[j + 1];
        //   source[j + 1] = tmp;

        [source[j + 1], source[j]] = [source[j], source[j + 1]];
      }
    }
  }
  return source;
}

export function bubbleSort02(source) {
  for (let i = 0; i < source.length - 1; i++) {
    let isOk = false;
    for (let j = 0; j < source.length - 1 - i; j++) {
      if (source[j] > source[j + 1]) {
        isOk = true;
        //   let tmp = source[j];
        //   source[j] = source[j + 1];
        //   source[j + 1] = tmp;
        [source[j + 1], source[j]] = [source[j], source[j + 1]];
      }
    }
    if (!isOk) {
      break;
    }
  }
  return source;
}
