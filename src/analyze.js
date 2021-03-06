const caesar = {
  average: array => array.reduce((total, num) => total + num) / array.length,
  min: array => Math.min(...array),
  max: array => Math.max(...array),
  length: array => array.length,
};

module.exports = caesar;
