import test from "ava";
import { replaceSpace } from "../替换空格";

test("【替换空格】", (t) => {
  t.is(replaceSpace(" 1 2 3"), "%201%202%203");
});
