let message: string;

const cBmi = (mas: number, square: number): string => {

    let r: number = mas / square; // guardamos el resultado del calculo en la variable r

    // Segun el valor de r asignamos un mensaje a message
    if (r <= 0.6) {
        message = 'Very severely underweight';
    }
    else if (r > 0.6 && r <= 0.64) {
        message = 'Severely underweight';
    }
    else if (r > 0.64 && r <= 0.74) {
        message = 'Severely underweight';
    }
    else if (r > 0.74 && r <= 1) {
        message = 'Normal (healthy weight';
    }
    else if (r > 1 && r <= 1.2) {
        message = 'Overweight';
    }
    else if (r > 1.2 && r <= 1.4) {
        message = 'Obese Class I (Moderately obese)';
    }
    else if (r > 1.4 && r <= 1.6) {
        message = 'Obese Class II (Severely obese)';
    }
    else if (r >= 1.6) {
        message = 'Obese Class III (Very severely obese)';
    }

    // Devolvemos por pantalla el string message con el resultado de r
    return `${message}: ${r}`;

}

const checkParameters = (parameters: Array<string>) => {
    if (parameters.length > 4) { // Comprovamos que no hay argumentos de mas
        throw new Error('Hay demasiados argumentos para esta operación');
    }
    else if (parameters.length < 4) { // Comprovamos que no faltan argumentos
        throw new Error('No hay argumentos suficientes para esta operación');
    }
    else { // Si el numero de argumentos es correcto 
        if (isNaN(Number(parameters[2])) || isNaN(Number(parameters[3]))) { // Comprovamos que los argumento son numeros
            throw new Error('Uno de los parametros introducidos no es un numero');
        }
        else if (Number(parameters[2]) === 0 || Number(parameters[3]) === 0) { // Si son numeros comprovamos que ninguno es 0 
            throw new Error('Uno de los valores introducidos es 0');
        }
    }

}

try {
    checkParameters(process.argv);
    console.log(cBmi(Number(process.argv[2]), Number(process.argv[3])));
}
catch (e) {
    console.log(`Se ha producido un error: ${e.message}`);
}

