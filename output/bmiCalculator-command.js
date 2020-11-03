"use strict";
const cBmi = (mas, square) => {
    return mas / square;
};
console.log(`Resultados normales: ${cBmi(Number(process.argv[2]), Number(process.argv[3]))}`);
