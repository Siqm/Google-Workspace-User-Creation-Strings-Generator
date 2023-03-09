const fs = require('fs')


function emailCreator() {

    const domain = "@degrausnet.com.br"

    fs.readFile("./src/content/names.txt", 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return
        }


        const emails = data.split('\n').map(name => {

            const names = name.split(' ').map(name => name.trim().toLowerCase())
            const nameSize = names.length
            const email = names[0] + '.' + names[nameSize-1] + domain
            return email
        })

        fs.writeFile('./src/content/emails.txt', emails.join('\n'), err => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`Arquivo salvo com sucesso.`)
        })

    })

}

export { emailCreator }