function formatNumber(number, digits) {
    if (Number.isInteger(number)) {
        return number;
    } else {
        let digit = digits || 2;
        return +number.toFixed(digit);
    }
}