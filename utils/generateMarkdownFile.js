const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./output/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of function here to make sure Promise doesn't accidentally execute the resolve() function as well
          return;
        }
        // if everything went well, resolve Promise and send successful data to `.then()` method
        resolve({
          ok: true,
          message: 'README.md File created!'
        });
      });
    });
  };

  module.exports = writeFile;