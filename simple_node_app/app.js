const http = require('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;

const server = http.createServer((req, res) => {

    if (http.request.url === '/') {

        render(res.writeHead, 'index.html');

    } else if (req.url === '/about') {
        render(res, 'about.html');
    } else if (req.url === '/contact') {
        render(res, 'contact.html');
    } else {
        res.writeHead(404, { 'content-Type': 'text/html' });
        res.end('<h1>404 file not found</h1>')
    }

}).listen(port, () => {
    console.log('http://localhost:${port}')

})

//process the data 

const render = (res, file) => {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html' });
            res.end('<h1>404 file not found</h1>')
        }
        res.writeHead(200, { 'content-Type': 'text/html' });
        return render.end(data);
    });

}