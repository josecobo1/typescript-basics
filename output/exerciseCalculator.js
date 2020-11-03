"use strict";
const calculateExercises = (horas) => {
    let promedio = (horas.reduce((a, b) => a + b)) / horas.length;
    let s;
    promedio > 4 ? s = true : s = false;
    let rD = `Eres un màquina`;
    let tD = horas.filter(hora => hora === 0); // Cuento cuantos elementos valen 0 y los pongo en el array tD
    let r = {
        periodLength: horas.length,
        trainingDays: horas.length - tD.length,
        success: s,
        rating: horas[3],
        ratingDescription: rD,
        target: horas[5],
        average: promedio
    };
    return r;
};
console.log(calculateExercises([3, 18, 0, 4.5, 0, 3, 1]));
