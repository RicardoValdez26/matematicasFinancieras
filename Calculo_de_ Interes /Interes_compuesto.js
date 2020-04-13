const Cambiar = require('./Cambiar_valores');

//Calcular el interes compuesto  

let monto;
let interes;
let tipoInteres;
let tiempo;
let tipoTiempo;

module.exports.monto = monto;
module.exports.interes = interes;
module.exports.tipoInteres = tipoInteres;
module.exports.tiempo = tiempo;
module.exports.tipoTiempo = tipoTiempo;


//funcuiones
module.exports.compuesto = compuesto();
module.exports.Dos_variantes = Dos_variantes();

let compuesto = function(monto,interes,tiempo){
    if(tipoInteres == 'anual'){
        //calcular con interes anual 
            let resultado = monto * Math.pow(interes + 1,tiempo);    
            return resultado;

    } else if(tipoInteres == 'mensual'){
        //calcular con interes mensual
            let resultado = monto * (Math.pow(1 + interes,1/año) - 1);
            return resultado;
    }
}
//calcular el valor futuro con dos interes difrentes 

let segundoInteres;

let Dos_variantes = function(monto,tiempo,interes,segundoInteres){

    let resultadoInicial = compuesto(monto,interes,tiempo);
    
    if(tipoInteres == 'anual'){
        let resultadoFinal = resultadoInicial * Math.pow(segundoInteres + 1,tiempo);
    }else if(tipoInteres == 'mensual'){

    }    
    return resultadoFinal;
}


