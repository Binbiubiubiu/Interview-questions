function instanceOf(left, right) {
  let prototype = right.prototype;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto == null) {
      return false;
    }

    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(instanceOf({}, Object)); //true
console.log(instanceOf([], Number)); //false
