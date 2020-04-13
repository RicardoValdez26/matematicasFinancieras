//calcular el monto con descuento y antes del descuento 

let Valor_Inicial;
let Variacion;
let Valor_Final;

const Antes_de_descuento = function(Valor_Final,Variacion){
    let Resultado_ADD = Valor_Final / (1 - Variacion);
    return Resultado_ADD;
}
const Despues_de_descuent = function(Valor_Inicial,Variacion){
    let Resultado_DD = Valor_Inicial * (1 - Variacion);
    return Resultado_DD;
}

//Calcular el monto con aumento y antes del aumento 
const Despues_de_aumento = function(Valor_Inicial,Variacion){
    let resultado_DA = Valor_Inicial * (1 + Variacion);
    return resultado_DA;
} 

const Antes_de_aumento = function(Valor_Final,Variacion){
    let resultado_AA = Valor_Final / (1 + Variacion);
    return resultado_AA;
}