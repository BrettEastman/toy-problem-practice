function maxAdditionalDiners(N, K, M, S) {
  S.sort((a, b) => a - b);

  let guests = 0;
  let start = 1;
  let range = null;

  for (const seatedDiner of S) {
    range = seatedDiner - start;
    guests += Math.floor(range / (K + 1));
    start = seatedDiner + K + 1;
  }

  range = N - start + 1;
  guests += Math.ceil(range / (K + 1));

  return guests;
}

console.log(maxAdditionalDiners(10, 1, 2, [2, 6])); // Should return 3
console.log(maxAdditionalDiners(15, 2, 3, [11, 6, 14])); // Should return 1
