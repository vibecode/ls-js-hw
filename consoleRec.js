function consoleRec(arr, i) {
  if (i < arr.length) {
    console.log(arr[i]);

    consoleRec(arr, i + 1);
  }
}

module.exports = consoleRec;