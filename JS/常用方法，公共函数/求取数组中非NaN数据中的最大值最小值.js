function max(arr){
  arr = arr.filter(item => !_isNaN(item))
  return arr.length ? Math.max.apply(null, arr) : undefined
}
//max([1, 2, '11', null, 'fdf', []]) ==> 11

function min(arr){
  arr = arr.filter(item => !_isNaN(item))
  return arr.length ? Math.min.apply(null, arr) : undefined
}
//min([1, 2, '11', null, 'fdf', []]) ==> 1
