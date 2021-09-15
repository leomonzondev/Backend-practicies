console.log('Inicio del programa')

setTimeout( function(){
    console.log('Primer Time Out')
}, 3000 )

setTimeout( function(){
    console.log('Segundo Time Out')
}, 0 )

setTimeout( function(){
    console.log('Tercer Time Out')
}, 0 )

console.log('Fin del programa');