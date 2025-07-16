const Chismosa = require('./Chismosa');
// Clase abstracta "CompaneraCuriosa"
class CompaneraCuriosa extends Chismosa{
            
    constructor (nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    
    //Metodos
    recolectarInfo(){
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");
        this.modificarNivelChisme(Math.random()); 
    }
    contarChisme(){
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");
        this.modificarNivelChisme(0.5);
        this.modificarReputacion(1);
    }  
}

module.exports = CompaneraCuriosa;
