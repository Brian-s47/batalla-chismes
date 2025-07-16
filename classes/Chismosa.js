// Clase abstracta "chismosa"
class Chismosa{
            
    //Atributos
    #reputacion = 0;
    #nivelChisme = 0;

    //Constructor
    constructor(nombre, reputacion, nivelChisme){

        if(this.constructor === Chismosa){
            throw new Error("No es posible crear a una (Chismosa) pura")
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }
    
    //Metodos
    recolectarInfo(){
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }
    contarChisme(){
        throw new Error("Este método no tiene implementación porque es abstracto!!")
    }

    //getters y setters
    getReputacion() {
        return this.#reputacion;
      }
    
      getNivelChisme() {
        return this.#nivelChisme;
      } 
      setReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
      }
    
      setNivelChisme(valor) {
        this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + valor));
      }
}

module.exports = Chismosa;