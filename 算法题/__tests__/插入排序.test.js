import test from "ava";
import { randomNumberArr } from "../../utils/index.js";
import { insertionSort } from "../插入排序.js";

test("【插入排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(insertionSort(arr), rightSortArr, "排序错误");
});
