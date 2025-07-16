const Chismosa = require('./Chismosa');
// Clase abstracta "TiaVecina"
class TiaVecina extends Chismosa{
            
    constructor (nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    
    //Metodos
    recolectarInfo(){
        console.log("Aprovecha la reunión del barrio para escuchar discretamente");
        this.setNivelChisme(Math.random() * 2 + 2); 
    }
    contarChisme(){
        console.log("Difunde el chisme mientras ofrece caféFiltra el chisme por estados en WhatsApp");
        const nivelExageracion = Math.random() < 0.5;
        this.modificarNivelChisme(1.5);
        this.modificarReputacion(nivelExageracion ? -2 : 0.5);
    }   
}

module.exports = TiaVecina;
