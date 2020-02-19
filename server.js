/* Configurando o servidor */ 
const express = require("express");
const server = express();

/* Configurando a template Engine */
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server,
    noCache: true,
});

/* Configurando o servidor para apresentar arquivos extras */
server.use(express.static('public')); 

/* Lista de doadores */
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "O+"
    },
    {
        name: "Mayke Brito",
        blood: "A+"
    }
]

/* Configurando a apresentação da página */
server.get("/", function(req, res){
    return res.render("index.html", { donors });
}); 


/* Iniciando o servidor */
server.listen(3000, function(){
    console.log("Iniciei o server")
});