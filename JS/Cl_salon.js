export default class Cl_salon {
    constructor () {
        this.contEstudiantes = 0;
        this.contAprobados = 0;
        this.auxcedula = 0;
        this.mayor = 0;
    }

    procesarestudiante(e) {
  // Contar estudiantes en general
   this.contEstudiantes++;

   //Cont aprobados
   if (e.notaFinal >= 48 ) {
    this.contAprobados++;
 }
    // cedula de uno de los mejores estudiantes
  if (e.notaFinal > this.mayor) {
    this.mayor = e.notaFinal;
    this.auxcedula = e.cedula;
  }
 }
  PorcentajeAprob(){
    return (this.contAprobados*100)/this.contEstudiantes;
 }
 motrarcedula() {
    return this.auxcedula;
  }
}