let horamed= Number(prompt("¿Cual fue la hora en la que tomo el medicamento la primera vez?"));
let frecuencia= Number(prompt("¿Cada cuantas horas tiene que tomar el medicamento?"));
tom=horamed+frecuencia;


for (let i=1; i<=23;i++){
    /*let codigo = "<marquee>" + i + "</marquee>";*/
    n=frecuencia+tom;
    let codigo = "la toma es a las: "+ tom;
    document.write(codigo);
    n+=i;
}

