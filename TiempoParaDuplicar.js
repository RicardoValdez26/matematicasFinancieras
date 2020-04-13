//calcular el tiempo a duplicar el monto inicial 

let interes;

let duplicar = function(interes){
    let resultado_Final =  (Math.log(2)) / (Math.log(1 + interes));
    return resultado_Final;
}
console.log(duplicar(interes));

