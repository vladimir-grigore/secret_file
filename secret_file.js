require('dotenv').config();

console.log(process.env.SECRET_MESSAGE);
console.log(process.env.USERNAME);

//testing variable assignment inside the .env file
//Spoiler alert - it doesn't work
console.log(process.env.TEST);