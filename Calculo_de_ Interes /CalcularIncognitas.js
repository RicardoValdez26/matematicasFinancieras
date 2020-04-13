const InteresCompuesto = require('./Interes_compuesto');


let valorFuturo = 5000;

//sacar el valor de tiempo anual 

let tiempo_incognito = function(monto, interes, valorFuturo) {
    let resultado_tiempo = (Math.log(valorFuturo / monto)) / (Math.log(1 + interes));
    return resultado_tiempo;
}

//calcular el valor de interes anual 

let interes_incognito = function(monto, valorFuturo,tiempo){
    let resultado_interes = Math.pow(valorFuturo/monto, 1/tiempo) - 1;
    return resultado_interes;
}

//calcular el monto inicial 

let monto_incognito = function(valorFuturo,tiempo,interes){
    let resultado_monto = valorFuturo / Math.pow(1 + interes,tiempo);
    return resultado_monto;
}

//calcular el interes secuencial con dos intereses variantes 
let interes_secuencial = function(monto, tiempo,interes,Segundo_interes){
    let valor_final_CVariantes = Dos_variantes(monto,tiempo,interes,Segundo_interes);

    let valor_final_secuencial = Math.pow(valor_final_CVariantes/monto,1/Tiempo);
    return valor_final_secuencial;

}
