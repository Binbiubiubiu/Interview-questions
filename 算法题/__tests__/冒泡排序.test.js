import test from "ava";
import { randomNumberArr } from "../../utils/index.js";
import { bubbleSort01, bubbleSort02 } from "../冒泡排序.js";

test("【冒泡排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort();

  t.deepEqual(bubbleSort01(arr), rightSortArr, "排序错误");
});

test("【冒泡排序】 case02", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort();

  t.deepEqual(bubbleSort02(arr), rightSortArr, "排序错误");
});
