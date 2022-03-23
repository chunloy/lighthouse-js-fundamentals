const howManyHundreds = function (num) {
  if (num % 10 === 0) {
    return num / 100;
  } else {
    return Math.floor(num / 100);
  }
}