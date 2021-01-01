import test from "ava";
import { randomNumberArr } from "../../utils/index.js";
import { quickSort } from "../快速排序.js";

test("【快速排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(quickSort(arr), rightSortArr, "排序错误");
});
