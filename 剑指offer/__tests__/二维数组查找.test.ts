import test from "ava";
import { searchInRowColumn } from "../二维数组查找";

test("【二维数组的查找】", (t) => {
  const arr = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];

  t.is(searchInRowColumn(2, arr), true, "搜索错误");
});
