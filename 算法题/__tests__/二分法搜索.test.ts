import test from "ava";
import { binarySearch } from "../二分法搜索";

test("【二分法搜索】 case01", (t) => {
  const arr = [1, 2, 3, 4, 5, 6];

  t.is(binarySearch(arr, 2), 1, "搜索错误");
});
