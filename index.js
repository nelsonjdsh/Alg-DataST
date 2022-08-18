function numDiff(x, y) {
  let diff = 0;
  if (x && y && x > y) {
    for (let i = y; i < x; i++) {
      diff++;
    }
  } else if (y && x && y > x) {
    for (let i = x; i < y; i++) {
      diff++;
    }
  } else {
    return 0;
  }
  return diff;
}

const maxValue2 = (arr) => {
  let max = 0;
  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};

let values = [23, 34, 444];

const characterLength = (word) => {
  let chars = 0;
  for (let element of word) {
    if (element.includes(' ')) {
      return `Value [${word}] is not valid. Word cannot contain spaces`;
    }
    chars++;
  }
  return chars;
};

function sumArrayValues(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
}

const numberDiff = (a, b) => {
  let diff = 0;
  while (a > b) {
    b++;
    diff++;
  }
  return diff;
};

const numberMulti = (a, b) => {
  let multi = 0;

  for (let i = 0; i < a; i++) {
    multi += b;
  }
  return multi;
};

const maxValue = (arr) => {
  let max = 0;

  for (let element of arr) {
    if (element > max) {
      max += element;
    }
  }
  return max;
};

const numDiv = (a, b) => {
  let result = 0;
  while (a >= b) {
    result++;
    a -= b;
  }
  return result;
};

console.log(numDiv(8, 6));

function primeNumber(number) {
  let prime = true;
  for (let i = 2; i <= number / 2 && prime; i++) {
    if (number % i == 0) prime = false;
  }
  return prime;
}

console.log(primeNumber(31));

function simpleArraySum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}

const compareTriplets = (a, b) => {
  let index = 0;
  let alice = 0;
  let bob = 0;
  for (const element of a) {
    if (element < b[index]) {
      bob++;
    }

    if (element > b[index]) {
      alice++;
    }

    index++;
  }
  return [alice, bob];
};

const arraySum = (ar) => {
  let sum = 0;
  for (const element of ar) {
    sum += element;
  }
  return sum;
};
