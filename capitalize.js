function capitalize(string){
    const firstLetter = string[0].toUpperCase();
    const remainder = string.substring(1);
    return firstLetter.concat(remainder);
}
module.exports = capitalize
