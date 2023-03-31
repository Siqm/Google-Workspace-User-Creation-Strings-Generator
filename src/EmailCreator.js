const fs = require('fs')


function emailCreator(domain, data, createFile) {

    console.log(typeof data)

    const emails = data.split('\n').map(name => {

        const splittedNames = name.split(' ').map(name => name.trim().toLowerCase())
        const nameSize = splittedNames.length
        const email = splittedNames[0] + '.' + splittedNames[nameSize-1] + domain
        return email
    })

    const joinedEmails = emails.join('\n')

    if(createFile) {
        fs.writeFile('./content/emails.txt', joinedEmails, err => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`Arquivo salvo com sucesso.`)
        })
    }

    return joinedEmails;
}

module.exports =  emailCreator;