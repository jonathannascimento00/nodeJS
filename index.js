const express = require("express");
const app = express();


//função de callback
//é executada sempre que algum evento acontece
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html"); //serve para enviar algo
});

app.get("/sobre", function(req,res){
    res.send("About me");
});

app.get("/blog", function(req, res){
    res.send("This is my blog. Welcome");
});

//parâmetro -> /:param
app.get("/ola/:nome", function(req, res){
    res.send("<h1>Olaaaaa " + req.params.nome+"</h1>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081 do localhost");
}); //linha para rodar servidor - sempre tem que ser a última linha do código
