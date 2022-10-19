/* function nombre(){}  */            /* funcion normal */
/* const nombre = function(){};  */   /* funcion anonima */
/* const nombre = () => {};  */   /* funcion flecha */







function divisores(numero) {
    let total = 0;

    for(let i=1; i <=numero; i++) {
        if(numero % i == 0){
            total++;
        }

    }
    return total;
}



/* 
const divisoresV2 = function(numero){
    let total = 0;

    for(let i=1; i <=numero; i++) {
        if(numero % i == 0){
            total++;
        }

    }
    return total;
};
 */


/* 
const divisoresV3 = numero => {
    let total = 0;

    for(let i=1; i <=numero; i++) {
        if(numero % i == 0){
            total++;
        }

    }
    return total;
};
 */
console.log("Total de divisores", divisores(32));
console.log("Total de divisores", divisoresV2(32));
console.log("Total de divisores", divisoresV3(32));




function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);

    let resultado = 
    document.getElementById("result");


    resultado.value = divisores(numero);
    /* Img.rsc */

}


/* function f1(){}

function f2(){}

function f3(){} */

/* ejemplo = function(numero){
        let total = 0;
    
        for(let i=1; i <=numero; i++) {
            if(numero % i == 0){
                total++;
            }
    
        }
        return total;
    
} */