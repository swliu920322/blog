function debounce(fn, delay) {
  var timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);

  };
}

debounce(document.onscroll)();

function throttle(fn, delay) {
  var timer;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null; // TODO 记得
    }, delay);
  };
}
