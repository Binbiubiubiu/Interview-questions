import test from "ava";
import { randomNumberArr } from "../../utils/index";
import { quickSort } from "../快速排序";

test("【快速排序】", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(quickSort(arr), rightSortArr, "排序错误");
});
