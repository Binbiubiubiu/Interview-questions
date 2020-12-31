import test from "ava";
import { randomNumberArr } from "../../utils/index.js";
import { selectSort } from "../选择排序.js";

test("【选择排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort();

  t.deepEqual(selectSort(arr), rightSortArr, "排序错误");
});
