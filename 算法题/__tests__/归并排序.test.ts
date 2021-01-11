import test from "ava";
import { randomNumberArr } from "../../utils/index";
import { mergeSort } from "../归并排序";

test("【归并排序】", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);
  t.deepEqual(mergeSort(arr), rightSortArr, "排序错误");
});
