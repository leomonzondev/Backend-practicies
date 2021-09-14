let deadpool={
    nombre: 'wade',
    apellido:'winston',
    poder:'regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}

// let nombre = deadpool.nombre
// let apellido = deadpool.apellido;
// let poder = deadpool.poder

let {nombre:primerNombre ,apellido,poder} = deadpool;

console.log(primerNombre,apellido,poder);