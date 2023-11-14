const fs = require('node:fs');

//La variable folder guarda la ruta donde se esta ejecutando este proceso (8.ls-advanced.js)
const folder = process.argv[2] ?? '.';


//Lee el directorio y muestra todas las carpetas y archivos que se encuentran dentro de
//la ruta que guarda folder
fs.readdir(folder, (error, files)=> {
    if(error){
        console.error('Error al leer el directorio: ', error);
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
})