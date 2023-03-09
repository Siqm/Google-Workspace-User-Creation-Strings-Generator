const fs = require('fs')

async function StringCreator() {

    const namesPromise = new Promise((resolve, reject) => {

        fs.readFile('./src/content/names.txt', 'utf-8', (err, data) => {
            
            if (err) {
                console.log('Error to load student names')
                reject(err);
            }

            var names = data.split('\n')
            names = names.map(name => name.charAt(0).toUpperCase() + name.slice(1))

            const userString = names.map(name => {
                const nameParts = name.split(' ')
                const firstName = nameParts[0]
                const familyName = nameParts.slice(1).join(' ')

                const user = `${firstName},${familyName},`

                return user
            })

            resolve(userString);
        });
    });

    const resultado = await namesPromise;

    const emailsPromise = new Promise((resolve, reject) => {
        fs.readFile('./src/content/emails.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }

            resolve(data)
        })
    })

    const emails = await emailsPromise
    const emailsArray = emails.split('\n')
    let i;
    let fullStrings = new Array;

    for(i = 0; i < emailsArray.length; i++) {
        console.log(resultado[i]+emailsArray[i])
        fullStrings[i] = resultado[i]+emailsArray[i]+",senhaNova,,/Alunos,,,,,,,,,,,,,,,,,,,,true,,"
    }
    

    fs.writeFile('./src/content/result.txt', fullStrings.join('\n'), err => {console.log(err)})
}

export { StringCreator }
