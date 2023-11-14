// Es un objeto global que proporciona informacion y control sobre
// el proceso actual de ejecucion
// tiene propiedades y metodos que van a permitir interactuar con el
// entorno de ejecucion de NodeJs y da info relacionada con EL PROCESO ACTUAL
// Por ejemplo, cosas que podria tener el proceso actual son:

// -Argumentos de entrada al momento de ejecutar el proceso 
console.log(process.argv);

// -Podemos controlar el proceso y su salida
//process.exit(0); //Sale porque todo ha salido bien
//process.exit(1); //Sale porque ha habido algun error y debe terminar el proceso

// -Podemos controlar eventos del proceso
// process.on['exit', ()=> {
//     //Limpiar la consola
// }]

// -Podemos mostrar desde que carpeta estamos ejecutando el proceso
console.log('Aca: ',process.cwd())

