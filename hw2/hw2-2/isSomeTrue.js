function isSomeTrue(source, filterFn) {
  function check() {
    if (source.length === 0) {
      throw new Error('Массив не должен быть пустым');
    }

    for (var i = 0; i < source.length; i++) {
      if (filterFn(source[i]) === true) return true;
    }

    return false;
  }

  try {
    return check();
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = isSomeTrue;
