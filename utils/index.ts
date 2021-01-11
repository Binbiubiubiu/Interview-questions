export const randomNumberArr = (size = 10, max = 100000) =>
  new Array(size).fill(max).map((_) => Math.floor(max * Math.random()));
