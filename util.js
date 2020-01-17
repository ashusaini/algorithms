


function max(arr, fun) {
  const compare = (a, b) => fun ? (fun(a) > fun(b) ? a : b) : (a > b ? a : b);
  return arr.reduce(compare, fun ? fun(arr[0]) : arr[0])
}
exports.max = max;
