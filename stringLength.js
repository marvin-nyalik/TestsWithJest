function stringLength (string) {
    const length = string.length;

    if (length < 1 || length > 10) {
        throw new Error('String length validation error');
    }
    return string.length;
}

module.exports = stringLength;