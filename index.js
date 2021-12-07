
import myCollection from './collection.js';
import chalk from 'chalk';
import isEven from 'is-even';

let numberOfItems = 0;

function describeItem(item) {
  if (item.count === 1) {
    numberOfItems++;
    console.log(
      `I have a ${chalk.cyan.bgGrey(item.name)}. Here's what I like about it: ${
        item.whatILike
      }`
    );
  } else {
    numberOfItems += item.count;
    console.log(
      `I have ${chalk.yellow.bold(item.count)} ${chalk.cyan.bold(
        item.name + 's'
      )}. Here's what I like about it: ${item.whatILike}`
    );
  }
}

function describeCollection(array) {
  for (let i = 0; i < array.length; i++) {
    describeItem(array[i]);
  }
}
describeCollection(myCollection);

//npm isEven
if (isEven(numberOfItems)) {
  console.log(
    `My collection has an even number of objects. The total is ${numberOfItems}`
  );
} else {
  console.log(
    `My collection has an odd number of objects. The total is ${numberOfItems}`
  );
}

