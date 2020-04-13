//calcular el interés simple 

let monto;
let interes;
let tiempo;


let simple = function(monto, interes, tiempo) {
     
    return monto * (1 + (interes * tiempo));

}

console.log(simple(monto, interes, tiempo));
