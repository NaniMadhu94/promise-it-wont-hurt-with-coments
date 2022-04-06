/* declare a function 'attachTitle' which prepends 'DR' to the first name */
function attachTitle(name) {
return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log);