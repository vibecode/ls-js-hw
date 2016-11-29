function consoleRec(arr, i = 0) {
  if (!(arr instanceof Array)) {
    throw new Error('не является массивом');
  }

  if (i < arr.length) {
    console.log(arr[i]);

    consoleRec(arr, i + 1);
  }
}

module.exports = consoleRec;