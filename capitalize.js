function capitalize(string){
    const assert = isNaN(string);
    if (assert) {
        const firstLetter = string[0].toUpperCase();
        const remainder = string.substring(1);
        return firstLetter.concat(remainder);
    }
    
    throw new Error('Input should be a string');
}
module.exports = capitalize
