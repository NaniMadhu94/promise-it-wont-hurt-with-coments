
/* crwate a function aa that accepts 2 promises as argvs*/
function all(a, b) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var out = [];
/* Attach then fulfillment handlers to both promises and increment the internal
counter when the handlers are called.*/
    a.then(function (val) {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then(function (val) {
      out[1] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);