exports.range = function range(start, end, step = 1) {
  let i = start;
  let result = [];
  if (start > end) throw new Error(`Can't iterate from ${start} to ${end}`);

  while (i < end) {
    result.push(i);
    i += step;
  }
  return result;
};

exports.writeColor = function writeColor(p) {
  let ir = parseInt(255.999 * p.x);
  let ig = parseInt(255.999 * p.y);
  let ib = parseInt(255.999 * p.z);

  console.log(`${ir} ${ig} ${ib}`);
};
