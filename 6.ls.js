const { ifError } = require('node:assert');
const { error } = require('node:console');
const fs = require('node:fs');
const { DefaultDeserializer } = require('node:v8');

//Lee el directorio
fs.readdir('.', (error, files)=> {
    if(error){
        console.error('Error al leer el directorio: ', error);
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
}) 
