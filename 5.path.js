const path = require('node:path')

//Muestra que barra separadora usa nuestro SO
console.log(path.sep)

//Une rutas con join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Nos da el nombre del fichero, el segundo parametro es para sacarle esa extension
//y que nos devuelva solo el nombre
const base = path.basename('/tmp/fede/password.txt', '.txt')
console.log(base)


//Nos devuelve solo la extension del fichero
const extension = path.extname('image.png')
console.log(extension)

/**Es util porque te da la extension correcta en aquellos casos que los nombres de
 * los ficheros esta compuesto por palabras separadas por puntos o cosas asi
 */ 
const extension2 = path.extname('mi.nueva.imagen.jpeg')
console.log(extension2)

