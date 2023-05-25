import { createServer } from 'http';

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Hello Brother!!! </h2>');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on localhost:3000');
})