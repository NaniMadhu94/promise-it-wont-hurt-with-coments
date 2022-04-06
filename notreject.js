/*  create afunction using promise constructor*/
var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED'); /* fulfill the promise value*/ 
  reject(new Error('I DID NOT FIRE')); /* Reject th promise with an error*/
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);