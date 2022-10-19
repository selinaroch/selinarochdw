
function operacion(op,numero,numero2) {
 let result = 0;
    switch(op){
    case "+":
        result=numero+numero2;
        break;
    case "-":
        result=numero-numero2;
        break;
    case "*":
        result=numero*numero2;
        break;
    case "/":
        result=numero/numero2;
        break;
    
    
} return result
}



function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);

    let numero2 = 
    parseInt(document.getElementById("numero2").value);

    let op = 
    document.getElementById("op").value;

    let resultado = 
    document.getElementById("result");


    resultado.value = operacion(op,numero,numero2);
    

}

