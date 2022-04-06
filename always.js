var myPromise = new Promise(function(fulfill, reject) {
    // "Producing Code" (May take some time)
    
      fulfill(); // when successful
      reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(function(value) 
{
    console.log('MAIN PROGRAM')
    console.log('PROMIMSE VALUE');
})
    
