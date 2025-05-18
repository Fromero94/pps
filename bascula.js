class Bascula {
    constructor() { // forma de mi objeto
      this.pesos = [75.5, 63.45, 61.9];
      this.alturas = [1.6, 1.61];
      this.fechas = ['29/10/2021', '03/11/2021', '11/11/2021'];
      this.imc= [];
      this.anotaciones = 3;
    }
  
    /**
     * Getters
     */

  
    obtenerNumeroAnotaciones() { //metodo para obtener el número de anotaciones
      return this.anotaciones;
    }
  

    obtenerPesoMaximo() { //metodo para obtener el máximo peso del array pesos
      return Math.max(...this.pesos);
    }
  
    obtenerPesoMinimo() { //metodo para obtener el mínimo peso del array pesos
      return Math.min(...this.pesos);
    }

    calcularIMC() {
      const ultimaAnotacion = this.pesos.length - 1; //última anotacion de peso
      const peso = this.pesos[ultimaAnotacion]; //var peso
      const ultimaAltura = this.alturas.length - 1; //última anotacion de altura
      const altura = this.alturas[ultimaAltura]; //var altura
      return peso / (altura * altura); //formula
  }
  
  

    /**
     * Setters
     */
    anotarPesoAltura(peso, altura, fecha) {
        if (typeof peso !== 'number' || peso <= 0) { //en caso de que el peso no sea tipo number o sea menor a 0 saldra error
            return "¡Debe registrar un peso válido!";
        }
    
        this.pesos.push(peso); //añadir ese peso aportado al array
        this.alturas.push(altura ? altura : 1); // Altura predeterminada
       
        if (fecha) {
            this.fechas.push(fecha);//añadir esa fecha peso aportado al array
        } else {
            const date = new Date(); 
            const day = String(date.getDate()).padStart(2, '0'); //obtener dia 
            const month = String(date.getMonth() + 1).padStart(2, '0'); //obtener mes
            const year = date.getFullYear(); //obtener año
            this.fechas.push(`${year}-${month}-${day}`); // Formato YYYY-MM-DD
        }
    
        this.anotaciones += 1; //sumar uno en anotaciones en caso de agregar peso,altura y fecha al metodo anotarPesoaltura
        return "¡Su peso se ha registrado correctamente!";
    }
 
    
    
    describirIMC(imc) { //if para que devuelva en resultado según el valor de imc
        if (imc < 16) return "Infrapeso (delgadez severa)";
        if (imc >= 16 && imc < 17) return "Infrapeso (delgadez moderada)";
        if (imc >= 17 && imc < 18.5) return "Infrapeso (delgadez aceptable)";
        if (imc >= 18.5 && imc < 25) return "Peso normal";
        if (imc >= 25 && imc < 30) return "Sobrepeso.";
        if (imc >= 30 && imc < 35) return "Obeso (Tipo I)";
        if (imc >= 35 && imc < 40) return "Obeso (Tipo II)";
        if (imc >= 40) return "Obeso (Tipo III)"; 
    }
    

  }
  
  // Exportación de la clase Bascula
  module.exports = Bascula;