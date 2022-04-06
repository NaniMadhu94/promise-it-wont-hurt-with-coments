var promise = new Promise(function (fulfill, reject) {
  
  /* promise might take time*/
  /* construct an error object witha parameter*/
    setTimeout(function () {
      reject(new Error('REJECTED!'));
    }, 300);
  });

  
/* create a function to print error.message using console*/
  function onReject(error) {
    console.log(error.message);
  }
  
    promise.then(null, onReject);