
var firstPromise = first();

/* chain the promises together using then */
var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

