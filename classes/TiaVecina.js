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

    //getters y setters
    get reputacion(){
        if(this.#reputacion > 2000){
            return {precio: this.#reputacion, mensaje: "El nivel de reputacion es: ${}"}
        }else{
            return {precio: this.#reputacion, mensaje: "Producto económico"}
        }
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