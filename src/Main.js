const emailCreator = require('./EmailCreator');
const formatNames = require('./NamesReader')

async function main() {

    const names = await formatNames("./content/names.txt")
    .then((formattedNames) => {
      return formattedNames
    })
    .catch((err) => {
      console.log(err)
    });

    console.log("names", names)


    const emails = emailCreator("@generico.com.br", names, true)

    console.log(emails)
}
main()