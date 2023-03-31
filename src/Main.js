const formatNames = require('./NamesReader')

async function main() {

    const names = await formatNames("./content/names.txt")
    .then((formattedNames) => {
      return formattedNames
    })
    .catch((err) => {
      console.log(err)
    });

    console.log(names)
}
main()