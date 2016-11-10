function isAllTrue(source, filterFn) {
  function check() {
    if (source.length === 0) {
      throw new Error('Массив не должен быть пустым');
    }

    for (var i = 0; i < source.length; i++) {
      if (filterFn(source[i]) === false) return false;
    }

    return true;
  }

  try {
    return check();
  } catch (e) {
    console.error(e.message);
  }
}
