const calculateBmi = (mas: number, square: number): number => {
    return mas / square;
}

console.log(`Resultados normales: ${calculateBmi(180, 74)}`);