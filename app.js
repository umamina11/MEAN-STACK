/*const http = require('http');
const server = http.createServer((request, response) => {

    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>Welcome to node.js!</h1>');
    response.end();


});
server.listen(3000, () => console.log("http://localhost::3000"));
*/
const http = require('http');
const server = http.createServer((request, response) => {


    response.writeHead(200, { 'content-type': 'text/html' });
    if (request.url === '/get') {

        response.write('you reached the GET page');
        if (request.method === 'GET') {
            response.end('GET');
        }
    } else if (request.url === '/post') {

        response.write('you reached the POST page');
        if (request.method === 'POST') {
            response.end('POST');
        }
    } else if (request.url === '/put') {

        response.write('you reached the PUT page');
        if (request.method === 'PUT') {
            response.end('PUT');
        }
    } else if (request.url === '/delete') {

        response.write('you reached the DELETE page');
        if (request.method === 'DELETE') {
            response.end('DELETE');
        }
    } else {
        response.end('None found');
    }
}).listen(3000, () => console.log("http://localhost:3000"));