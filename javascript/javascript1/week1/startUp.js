let firstWords = ["Easy", "Awesome", "Superb", "Excelent","Quiet","Apple", "Melon", "Citrus", "Grape","Sugar"];
let secondWords = ["Corporation", "Corporate", "MixPanel","Orange", "Nono", "Tako", "Juicy", "Plate", "Fishy", "Tasty"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
let strLength = firstWords[randomNumber].length + secondWords[randomNumber].length + 1;
console.log(`The startup: ${firstWords[randomNumber]} ${secondWords[randomNumber]} contains ${strLength} characters`);
