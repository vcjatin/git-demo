const http = require('http');
const url = require('url');



// SERVER 🙈
const server = http.createServer((req, res) => {
     const path = req.url;
    if (path === '/' || path === '/overview') {
        res.end("this is overview!")
    } else {
        res.writeHead(404, {
            'Content-type': "text/html",
            'my-own-header': 'hello world'
        });

        res.end('<h1> Page not Found! </h1>');


    }
    console.log(path);
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listensing from server! 👂')

})