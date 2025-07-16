const Chismosa = require('./Chismosa');
// Clase abstracta "CompaneraCuriosa"
class CompaneraCuriosa extends Chismosa{
            
    constructor (nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    
    //Metodos
    recolectarInfo(){
        console.log(`L@ Compañer@ Curios@:`);
        console.log("Hace preguntas aparentemente profesionales a los compañeros de trabajo");
        this.setNivelChisme(Math.random()); 
    }
    contarChisme(){
        console.log("Comenta el chisme como ejemplo de vida en el trabajo");
        this.setNivelChisme(0.5);
        this.setReputacion(1);
    }  
}

module.exports = CompaneraCuriosa;
