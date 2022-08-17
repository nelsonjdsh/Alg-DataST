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

const maxValue = (arr) => {
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
