# The Script

By using Node.Js and JavaScript I've created a way to facilitate the process of creating users in bulk on google workspace

## Minimum requirements:
1. Install Node.Js
2. Through CLI execute `npm install` in this repository
3. A .txt file with first name and last name of everyone whom you want to create an account

## How to use it:
1. Replace the `names.txt` file inside `./src/content/` folder with your file, as said above on minimum requirements
2. Go on `./src/Main.js` and follow the instructions to properly configure the script
3. Run the script with these commands:
```
cd src
node ./Main.js
```
4. Your file with the strings to copy and paste on a CSV file will be located at `./src/content/result.txt`

## Notice:
If there is any blank line in your names.txt file, the script will return an error.