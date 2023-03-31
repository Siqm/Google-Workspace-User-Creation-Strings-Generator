const fs = require('fs');
const accents = require('remove-accents');
const util = require('util')

function formatNames(inputFileName) {

  const readFileAsync = util.promisify(fs.readFile)

  return readFileAsync(inputFileName, 'utf-8')
    .then(data => {

      const names = data
        .toLowerCase()
        .split('\r')
        .map(fullName => fullName.trim())
        .map(fullName => accents(fullName)
          .split(' ')
          .map(name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`) // transforma a primeira letra de cada nome para maiusculo
          .join(' ')
        )
        .map(fullName => fullName.replace(/  +/g, ' ')); // Substituir duas ou mais ocorrências de espaços por apenas um

      const emptyIndex = names.indexOf('');
      if (emptyIndex !== -1) {
        console.error(`Error in line ${emptyIndex+1}`);
        return;
      }

      const formattedNames = names.join('\n');
      return formattedNames;
    })
    .catch(err => {
      console.error(err);
      return;
    })
}

module.exports =  formatNames;
