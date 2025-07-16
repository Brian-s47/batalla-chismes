const Chismosa = require('./Chismosa');
// Clase abstracta "EstudianteEspia"
class EstudianteEspia extends Chismosa{
            
    constructor (nombre, reputacion, nivelChisme){
        super(nombre, reputacion, nivelChisme);
    }
    
    //Metodos
    recolectarInfo(){
        console.log(`L@ estudiante espia:`);
        console.log("Lee chats ajenos desde el último puesto del salón");
        this.setNivelChisme(Math.random() * 2 + 1);
    }
    contarChisme(){
        console.log("Filtra el chisme por estados en WhatsApp")
        const NivelSerDescubierta = Math.random() < 0.3;
        this.setNivelChisme(1.5);
        this.setReputacion(NivelSerDescubierta ? -1.5 : 0.5);
    }   
}

module.exports = EstudianteEspia;
