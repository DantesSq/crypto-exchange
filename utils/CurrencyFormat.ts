export const currencyFormat = (number: number) => {
    let fixed = 2;
    if (number < 0) fixed = 4;
    if (number < 0.0001) fixed = 8;
    if (number < 0.00000001) fixed = 16;
    if (number > 0) {
        return '$' + number.toLocaleString('en-US');
    } else return '$' + number.toFixed(fixed);
};
