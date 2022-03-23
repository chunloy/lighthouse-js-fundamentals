const range = function (start, end, step) {
  let runningTotal = start;
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  } else if (start > end) {
    return array;
  } else if (step <= 0) {
    return array;
  } else {
    while (runningTotal <= end) {
      array.push(runningTotal);
      runningTotal += step;
    }
    return array;
  }
}