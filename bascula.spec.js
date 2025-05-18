var chai = require('chai');
var expect = chai.expect;
var Bascula = require('./bascula.js');



describe('Bascula', () => { //esta es nuestra función que abarca las pruebas
    let bascula; //variable bascula para llamar a la clase bascula

    beforeEach(() => { //funcion
        bascula = new Bascula(); //aquí se crea una nueva instancia bascula para empezar con un reset antes de ponernos probar
    });

    it('debería iniciar con 3 pesajes', () => {
        expect(bascula.obtenerNumeroAnotaciones()).to.equal(3); // comparar el resultado obtenerNumeroAnotaciones que sea igual al parentesis que acompaña a equal
    });

    it('debería anotar un nuevo peso', () => {
        bascula.anotarPesoAltura(70, 1.75); //añadir estos valores de peso y altura al metodo anoterPesoAltura que lo que hace es añadirla a this.pesos y this.alturas de bascula
        expect(bascula.obtenerNumeroAnotaciones()).to.equal(4);
    });

    it('debería calcular el peso máximo', () => {
        expect(bascula.obtenerPesoMaximo()).to.equal(75.5); // comparar el resultado obtenerPesoMaximo que sea igual al parentesis que acompaña a equal
    });

    it('debería calcular el peso mínimo', () => {
        expect(bascula.obtenerPesoMinimo()).to.equal(61.9); // comparar el resultado obtenerPesoMinimo que sea igual al parentesis que acompaña a equal
    });

    
    it('debería calcular el IMC correctamente', () => {
        bascula.anotarPesoAltura(70, 1.75);  //pasar esos datos al metodo AnotarPesoAltura
        const imc = bascula.calcularIMC(); //llamar al metodo calcularIMc para que calcule los datos del codigo anterior
        expect(imc).to.be.closeTo(22.86, 0.01); // Comparar sí el IMC calculado es igual al resultado que espero
    });
    
    it('debería describir el IMC', () => {
        expect(bascula.describirIMC(22)).to.equal("Peso normal"); //doy un parametro al metodo describirIMC para que me devuelva un resultado que tiene que ser al esperado
        expect(bascula.describirIMC(15)).to.equal("Infrapeso (delgadez severa)");//doy un parametro al metodo describirIMC para que me devuelva un resultado que tiene que ser al esperado
    });
});
