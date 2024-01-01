export const sum = (summa) => {
    return String(summa).split('').reverse().map((e, i) => i % 3 === 0 ? e + ' ' : e).reverse().join('')
}