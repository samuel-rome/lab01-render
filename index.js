var http = require('http');

var manejador  = function(solicitud,respuesta){
    respuesta.end('Hola Mundo!');
};

var servidor = http.createServer(manejador);

servidor.listen(3000);