const http = require('http');

http.createServer( (request, response) => {

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' } )

    response.write('id, nombre\n');
    response.write('1, Jesus\n');
    response.write('2, Antonio\n');
    response.write('3, Eddie\n');

    response.end();

} )
.listen( 8080 );

console.log('Escucha por puerto ', 8080);