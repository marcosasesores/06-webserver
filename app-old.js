const http = require('http');

http.createServer((req,res) => {
// req -> solicitud a mi web 
// res -> respuesta de la web

res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
res.writeHead(200, {'Content-Type': 'application/csv'})


res.write('id, nombre\n');
res.write('1, fernando\n');
res.write('2, maria\n');
res.write('3, Juan\n');
res.write('4, Pablo\n');
res.end();


})
.listen(8080)

console.log("Escuchando en el puerto 8080")