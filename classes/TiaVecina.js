const Chismosa = require('./Chismosa');
// Clase abstracta "TiaVecina"
class TiaVecina extends Chismosa{
            
    constructor (nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    
    //Metodos
    recolectarInfo(){
        console.log(`L@ ti@ Vecin@:`);
        console.log("Aprovecha la reunión del barrio para escuchar discretamente");
        this.setNivelChisme(Math.random() * 2 + 2); 
    }
    contarChisme(){
        console.log("Difunde el chisme mientras ofrece café, Filtra el chisme por estados en WhatsApp");
        const nivelExageracion = Math.random() < 0.5;
        this.setNivelChisme(1.5);
        this.setReputacion(nivelExageracion ? -2 : 0.5);
    }   
}

module.exports = TiaVecina;
