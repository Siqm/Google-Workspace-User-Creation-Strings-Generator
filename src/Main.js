const emailCreator = require('./EmailCreator');
const formatNames = require('./NamesReader');
const StringCreator = require('./StringCreator');

// How to use:

// Call the Main function at the end of this file, as shown, following these rules for the parameters.

// Rules: 
// First of all, you will need a .txt file with all the names of the people that you want to create emails for. 
// (You can check the example inside ./content/names.txt)
// The file should follow the pattern of having one full name per line. 
// Pass the file path as the first parameter of the Main function below.

// The second parameter should be the email domain, for example, "@myCompanyName.com".

// The last parameter should be a boolean value. 
// If you want a .txt file with all the generated emails, pass true; otherwise, pass false.

async function Main(filePath, domain, createEmailsArchive) {

    const names = await formatNames(filePath)
    .then((formattedNames) => {
      return formattedNames
    })
    .catch((err) => {
      console.log(err)
    });

    const emails = emailCreator(domain, names, createEmailsArchive)

    StringCreator(names, emails)
}

Main("./content/names.txt", "@generico.com.br", false)