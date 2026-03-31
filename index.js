const http = require("http")
const server = http.createServer(function(req,res){
    res.end("Ola mundo");
})
server.listen(3000);