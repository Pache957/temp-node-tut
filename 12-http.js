const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to our page')
    }
    if(req.url === '/about') {
        res.end("This is our story")
    }else{
        res.end("Wrong")
    }
    
})   

server.listen(5000)