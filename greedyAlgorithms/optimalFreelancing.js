function optimalFreelancing(jobs) {
  let daysInAWeek = 7;
  let daysFilled = new Array(daysInAWeek).fill(false);
  let result = 0;
  let i = 0;
  // sort jobs in order of highest payment first
  jobs.sort((a, b) => b.payment - a.payment);

  while (i < jobs.length) {
    let job = jobs[i];
    let maxTime = Math.min(job.deadline, daysInAWeek);
    for (let j = maxTime - 1; j >= 0; j--) {
      if (daysFilled[j] === false) {
        daysFilled[j] = true;
        result += job.payment;
        break;
      }
    }
    i++;
  }
  return result;
}

let exampleJobs = [
  { deadline: 2, payment: 1 },
  { deadline: 1, payment: 4 },
  { deadline: 3, payment: 2 },
  { deadline: 1, payment: 3 },
  { deadline: 4, payment: 3 },
  { deadline: 4, payment: 2 },
  { deadline: 4, payment: 1 },
  { deadline: 5, payment: 4 },
  { deadline: 8, payment: 1 },
];

optimalFreelancing(exampleJobs);
