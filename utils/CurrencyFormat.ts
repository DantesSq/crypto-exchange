export const currencyFormat = (number: number) => {
    if (number < 0) return '$' + number.toFixed(4);
    if (number < 0.0001) return '$' + number.toFixed(8);
    if (number < 0.00000001) return '$' + number.toFixed(16);

    if (number > 0) {
        return '$' + number.toLocaleString('en-US');
    }
};
