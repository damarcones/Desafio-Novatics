// Desafio 01 Novatics
var input = [8, 5, 10, 5, 2, 4, 4, 3, 1, 3, 4, 5, 8, 9, 19, 21, 100];

const ordena = (input) => { //bubble sort

    var tam = input.length;

    for(var i = 0; i < tam; i++){

        for(var j = 0; j < tam; j++){

            if(input[i] < input[j]){

                var aux = input[i];
                input[i] = input[j];
                input[j] = aux;
            }
        }
    }
    return input;
}

const retiraDuplicados = (input) =>{

    var tam = input.length;
    var naoDuplicados = [];

    for(var i = 0; i < tam; i++){

        if(input[i] != input[i+1]){

            naoDuplicados.push(input[i]);
        }
    }
    return naoDuplicados;
}

module.exports = {ordena, retiraDuplicados};

output = retiraDuplicados(input);

console.log(retiraDuplicados(input));
