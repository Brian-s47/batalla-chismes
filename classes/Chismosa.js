// Clase abstracta "chismosa"
class chismosa{
            
    //Atributos
    #reputacion = 0;
    #nivelChisme = 0;

    //Constructor
    constructor(nombre, reputacion, nivelChisme){

        if(this.constructor === chismosa){
            throw new Error("No es posible crear a una (Chismosa) pura")
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }
    
    //Metodos
    recolectarInfo(){
        console.log("Se esta recolectando informacion....");
    }
    contarChisme(){
        console.log("Se esta contando un chisme.....")
    }
    getReputacion(){
        console.log("Se esta obteniendo la reputacion.....")
    }
    getNivelChisme(){
        console.log("Se esta obteniendo el nivel de chisme.....")
    }   
}