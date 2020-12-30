function Create(proto) {
  let F = function () {};
  F.prototype = proto;
  return new F();
}
