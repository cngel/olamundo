const http = require("http")
const server = http.createServer(function(req,res){
    res.end("carlos quitumba");
})
server.listen(3000);