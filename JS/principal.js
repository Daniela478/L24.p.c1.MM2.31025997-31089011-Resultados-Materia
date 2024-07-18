//*5. RESULTADOS MATERIA
//Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
//aprueban con 48Ptos.
//Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
//aprobados y cédula de alguno de los mejores estudiantes.
//Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
//777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
//222 (60Ptos), la salida que se espera es como la siguiente:/
//Porcentaje de aprobados: 75%
//Cédula de uno de los mejores estudiantes: 333

import Cl_salon from "./Cl_salon.js";
import Cl_estudiante from "./Cl_estudiante.js";

//instaciar al objeto Estudiante
let estudiante1 = new Cl_estudiante ("888", 60);
let estudiante2 = new Cl_estudiante ("777", 50);
let estudiante3 = new Cl_estudiante ("999", 40);
let estudiante4 = new Cl_estudiante ("333", 80);
let estudiante5 = new Cl_estudiante ("111", 30);
let estudiante6 = new Cl_estudiante ("333", 90);
let estudiante7 = new Cl_estudiante ("444", 48);
let estudiante8 = new Cl_estudiante ("222", 60);

// instaciar el procesar
let salon = new Cl_salon ();
salon.procesarestudiante (estudiante1);
salon.procesarestudiante (estudiante2);
salon.procesarestudiante (estudiante3);
salon.procesarestudiante (estudiante4);
salon.procesarestudiante (estudiante5);
salon.procesarestudiante (estudiante6);
salon.procesarestudiante (estudiante7);
salon.procesarestudiante (estudiante8);

//salida solicitada

let salida = document.getElementById ("salida");


salida.innerHTML+=" <br> Porcentaje de Aprobados: "+salon.PorcentajeAprob() +"%";
salida.innerHTML+=" <br> Cédula de uno de los mejores estudiantes: "+salon.motrarcedula();


//let salida = document.getElementById("salida");
//salida.innerHTML = `
//<br>Porcentaje de Aprobados: ${salon.PorcentajeAprob().toFixed(2)}%
//<br>Cédula de uno de los mejores estudiantes: ${salon.auxcedula()}
//`;