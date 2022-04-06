/*  Create a function `iterate` that prints the first argument(an integer)
 to it and then returns that argument + 1;*/

function iterate(num) {
  console.log(num);
  return num + 1;
}

/*  Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`
 */
function alwaysThrows() {
  throw new Error('OH NOES');
}

/* attach a rejection handler */
function onReject(error) {
  console.log(error.message);
}
/* insert a call to 'alwaysThrows' after the 5th call*/
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);