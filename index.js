const fs = require('fs')

const fileHandler = (fileName) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(fileName,'utf8',(err, data) => {
      if(err) {
        reject(err);
        return
      }
      resolve(data)
    })
  });
}

fileHandler('personss.json')
.then(data => console.log(data))
.then(console.log('Simple Dump'))
.then(console.log('Simple Dump 2'))
.catch(err => {
  throw new Error('HI idiot') 
}).catch(err => {
  // Chain catch blocks to handle previous method
  // You can keep chaining this in-order to try
  // different methods on failure.
  fileHandler('persons.json')
  .then(data => console.log(data))
});