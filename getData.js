import getData from './app.js';

const userId = 1;
const userData = await getData(userId);
console.log(userData);
