const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> Hey i am jay patel</h1><p> hey this is a code</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port${port}`);

});