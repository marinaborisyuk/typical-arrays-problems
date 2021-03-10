
exports.min = function min (array) {

  if(!array || array.length <= 0)
  {
    return 0;
  }
    let minElement = array[0];
    for(let i = 0; i <= array.length; i++)
    {
      if(minElement > array[i])
      {
        minElement = array[i];
      }
    }
    return minElement;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
