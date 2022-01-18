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

fileHandler('persons.json')
.then(data => console.log(data));