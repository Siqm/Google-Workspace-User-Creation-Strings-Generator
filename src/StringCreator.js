const fs = require('fs')

function generatePassword() {
    return Math.random().toString(36).slice(-10);
}

async function StringCreator(names, emails) {

    var namesArray = names.split('\n')
    const emailsArray = emails.split('\n')

    namesArray = namesArray.map(name => name.charAt(0).toUpperCase() + name.slice(1))

    const namesCreationString = namesArray.map(name => {
        const nameParts = name.split(' ')
        const firstName = nameParts[0]
        const familyName = nameParts.slice(1).join(' ')

        const firstnameAndLastname = `${firstName},${familyName},`

        return firstnameAndLastname
    })

    let creationStrings = new Array;

    for (var i = 0; i < emailsArray.length; i++) {
        creationStrings[i] = namesCreationString[i] + emailsArray[i] + `,${generatePassword()},,/Alunos,,,,,,,,,,,,,,,,,,,,true,,`
    }

    fs.writeFile(
        './content/result.txt',
        creationStrings.join('\n'),
        err => {
            if (err) {
                console.log(err)
            }
        }
    )
}

module.exports = StringCreator;
