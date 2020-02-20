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

// Habilitando body do formulário
server.use(express.urlencoded({ extended: true }));

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

server.post("/", function(req, res){
    //Pegar dados do formulário
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    // Colocando valores dentro do array
    donors.push({
        name: name,
        blood: blood,
    });

    return res.redirect("/");
})


/* Iniciando o servidor */
server.listen(3000, function(){
    console.log("Iniciei o server")
});