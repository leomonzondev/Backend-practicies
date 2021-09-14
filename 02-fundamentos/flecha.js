let deadpool={
    nombre: 'wade',
    apellido:'winston',
    poder:'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());