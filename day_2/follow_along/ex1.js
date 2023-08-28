let addressNumber;
let addressStreet;
let country;
let globalAddress;

addressNumber = "420";
addressStreet = "Eberswalde";
country = "Mars";

globalAddress = 'I live at ' + addressNumber + ', ' + addressStreet + ', ' + country;

const betterGlobalAddress = `I live in ${addressStreet}, ${addressNumber} in ${country}`;
console.log(globalAddress);
console.log(betterGlobalAddress);
