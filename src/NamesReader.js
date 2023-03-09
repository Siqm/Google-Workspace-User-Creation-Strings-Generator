const fs = require('fs')
const accents = require('remove-accents')


function FormatNames(inputFileName) {

    fs.readFile(`./src/content/${inputFileName}`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }

        const names = data.toLowerCase().split('\r')
            .map(name => name.trim())
            .map(name => accents(name)
                .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            ).map(name => name.replace('  ', ' '))

        if (names.includes('')) {
            console.log("Error in line ", names.indexOf(''))
        }

        fs.writeFile('./src/content/names.txt', names.join('\n'), (err) => {
            if (err) {
                console.log(err)
                return
            }
        })
    })


}

export { FormatNames }