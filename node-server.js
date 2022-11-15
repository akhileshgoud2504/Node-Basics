{/*creating routers*/}

const http = require("http");

// console.log(http)
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>Home Page...</h1>")
        res.end()
    }
    if(req.url === "/about"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>About Page...</h1>")
        res.end()
    }
})

server.listen("2000","localhost",()=>{
    console.log("server running on 2000");
})