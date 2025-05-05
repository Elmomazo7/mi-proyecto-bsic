const http = require("http");

const server = http.createServer((rep, res)=> {
    res.writeHead(200, { "Content-Type": "text/plain"});
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http")
})
