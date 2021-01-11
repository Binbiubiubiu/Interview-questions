import test from "ava";
import { randomNumberArr } from "../../utils/index";
import { selectSort } from "../选择排序";

test("【选择排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(selectSort(arr), rightSortArr, "排序错误");
});
