/**http es un modulo de node que nos permite hacer
 * procesos y conexiones con el protocolo http como
 * por ejemplo crear un servidor http y poder recibir
 * request, peticiones, etc
 */
const http = require('node:http');

/**Para crear un servidor y usar http se usa server
 * y un servidor puede solamente recibir una peticion 
 * y devolver una respuesta
  */
const server = http.createServer((request, response)=>{
    console.log('reques received'); //esta linea solo es visible en la terminal, no se ve en el console de nuestro navegador porque se esta ejecutando en el servidor
    response.end('Hola mundo')
})

/**Terminado el servidor hay que ver el puerto desde 
 * donde este escuchara. 
 *Cuando un servidor "escucha en un puerto", significa que está configurado para esperar y atender las solicitudes entrantes que llegan a ese puerto específico.
 */

 server.listen(0, ()=>{
    console.log(`Server listening on port: http://localhost:${server.address().port}`) /**De esta manera lo que logramos es que node siempre ocupe un puerto que este vacio y el console.log nos devuelve la ruta ya lista para darle click*/
 })