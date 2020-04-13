const interesCompuesto = require('./Interes_compuesto');

//quitar el porcentaje del interes 
let Convertir_interes = function(){
        if(interesCompuesto.interes.length == 2){
            interesCompuesto.interes = interesCompuesto.interes.substring(0,1);
        }
        if(interesCompuesto.interes.length == 3){
            interesCompuesto.interes = interesCompuesto.interes.substring(0,2);
        }
        interesCompuesto.interes = interesCompuesto.interes/100;
}

//cambiar el tipo de tiempo de años a meses o viseversa 
let Cambiar_tiempo = function(){
    if(interesCompuesto.tipoTiempo == 'años' && interesCompuesto.tipoInteres == 'mensual'){
        interesCompuesto.tiempo = interesCompuesto.tiempo * 12;
    }else if(interesCompuesto.tipoTiempo == 'meses' && interesCompuesto.tipoTiempo == 'años'){
        interesCompuesto.tiempo = interesCompuesto.tiempo / 12;
    }
}


module.exports.Convertir_interes = Convertir_interes();
module.exports.Cambiar_tiempo = Cambiar_tiempo();
