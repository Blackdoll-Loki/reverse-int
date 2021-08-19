module.exports = function reverse (n) {
  let positive = Math.abs(n);
  let str = positive.toString();
  let arr = str.split("");
  let reversedStr = arr.reverse().join("");
  return +reversedStr;
}
