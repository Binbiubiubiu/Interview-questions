import test from "ava";
import { randomNumberArr } from "../../utils/index";
import { bubbleSort01, bubbleSort02 } from "../冒泡排序";

test("【冒泡排序】01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(bubbleSort01(arr), rightSortArr, "排序错误");
});

test("【冒泡排序】02", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(bubbleSort02(arr), rightSortArr, "排序错误");
});
