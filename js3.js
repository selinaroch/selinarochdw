let horamed= Number(prompt("¿Cual fue la hora en la que tomo el medicamento la primera vez?"));
let frecuencia= Number(prompt("¿Cada cuantas horas tiene que tomar el medicamento?"));
let dias= Number(prompt("¿Por cuantos dias tiene que tomar el medicamento?"));

ite=(24*dias)/frecuencia;


for (i = 1; i<=ite;) {
    if ( horamed>= 24) {
        n= -1*(24-horamed) 
        horamed= n
        if (horamed = 0){
            horamed= 0
        }
        document.write("La toma ", i, "es a las ", horamed, " horas " + "<br>");
        
        i= i+1
        horamed=horamed+frecuencia
    }
    else {
        document.write("La toma ", i, " es a las ", horamed, " horas " + "<br>");
        i= i+1
        horamed=horamed+frecuencia
    }
}