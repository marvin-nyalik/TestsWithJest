function fibonacci(n) {
    const checkIfNotNumber = isNaN(n);
    if (checkIfNotNumber) {
        throw new Error('Input must be a number');
    }

    if(n === 0) { return 1;}
    if(n === 1) { return 1;}
    if(n === 2) { return 1;}

    else return fibonacci (n) + fibonacci(n-1);
}

module.exports = fibonacci;