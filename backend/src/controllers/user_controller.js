var utilizador = require('../models/utilizador');
var developer = require('../models/dev');
var cob = require('../models/cob');
var linguagem = require('../models/linguagem');
var relacaolinguagem = require('../models/lingua_utilizador');
var sequelize = require('../models/database');

const controllers = [];

sequelize.sync();

/*
developer.create({
    id_cob: 1
});*/

utilizador.create({
    nome: 'Iljú',
    email: 'teste@teste',
    pass: '12345',
});

cob.create({
    nome:"Melbino",
    apelido:"Maino",
    cargo: 1,
    senioridade: "Sénior",
    disponibilidade: true,
    linguas: "PHP",
    inicioferias: JSON.stringify(new Date),
    fimferias: JSON.stringify(new Date)
})

controllers.list = async (req, res) => {
    const data = await utilizador.findAll()

        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.linguagem = async (req, res) => { //Listar todos os elementos da tabela linguagem
    const data = await linguagem.findAll()

        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.linguagem1 = async (req, res) => { //Listar linguagens do tipo 1

    const tipo = 1
    const data = await linguagem.findAll({
        where: { tipo },
    
    })
   
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.linguagem2 = async (req, res) => { //Listar linguagens do tipo 2

    const tipo = 2
    const data = await linguagem.findAll({
        where: { tipo },
    
    })
   
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.linguagem3 = async (req, res) => { //Listar linguagens do tipo 3

    const tipo = 3
    const data = await linguagem.findAll({
        where: { tipo },
    
    })
   
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}


/* Registar ---------------------- */
controllers.registar = async (req, res) => {
    // data
    const { nome, email, password,
    } = req.body;
    // create
    const data = await utilizador.create({
        nome: nome,
        email: email,
        password: password,
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error)
            return error;
        })
    // return res
    res.status(200).json({
        success: true,
        message: "Utilizador registado",
        data: data
    });
}

/* Pesquisar ----------------------------------------------- */
controllers.pesquisa = async (req, res) => {
    const { id } = req.params;
    const data = await cob.findAll({
        where: { id_colaborador: id },
        //include: [{ model: developer }]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data });
}

/* Login ----------------------------------------------- */
controllers.entrar = async (req, res) => {
    const email  = req.body.email;
    const password = req.body.password;
    
    const data = await utilizador.findAll({
        where: { email, password },
    
    }) /*select * from utilizadores*/ 
        .then(function (data,) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data, message:"Entraste" });
}


/* Adicionar ---------------------- */
controllers.adicionar = async (req, res) => {
    // data
    const { nome, apelido, cargo, senioridade, disponibilidade, linguas, inicioferias, fimferias
    } = req.body;
    // create
    const data = await cob.create({
        nome: nome,
        apelido: apelido,
        cargo: cargo,
        senioridade: senioridade,
        disponibilidade: disponibilidade,
        linguas: linguas,
        inicioferias: inicioferias,
        fimferias: fimferias
    }) /*Equivalente a utilizar Insert into utilizadores(nome,emai,.....) values('Arturo','arturo@mail.com')*/ 
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error)
            return error;
        })
    // return res
    res.status(200).json({
        success: true,
        message: "Adicionado",
        data: data
    });
}

/* Editar --------------------------------------------------- */
controllers.atualizar = async (req, res) => {
    // parameter get id
    const { id } = req.params;
    // parameter POST
    const { nome, apelido, cargo, senioridade, disponibilidade, web, programacao, basedados, inicioferias, fimferias } = req.body;
    // Update data
    const data = await cob.update({
        nome: nome,
        apelido: apelido,
        cargo: cargo,
        senioridade: senioridade,
        disponibilidade: disponibilidade,
        web: web,
        programacao: programacao,
        basedados: basedados,
        inicioferias: inicioferias,
        fimferias: fimferias,
    },
        {
            where: { id: id }
        })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data, message: "Atualizado com sucesso" });
}

/* Apagar ---------------------- */
controllers.apagar = async (req, res) => {
    // parâmetros por post
    const { id } = req.body;
    // delete por sequelize
    const del = await cob.destroy({
        where: { id: id }
    })
    res.json({ success: true, deleted: del, message: "Apagado com sucesso" });
}

/* tabela ---------------------- */

//const controllers = {}
sequelize.sync()
controllers.list= async (req, res) => {
const data = await cob.findAll({

})
.then(function(data){
return data;
})
.catch(error => {
return error;
});
res.json({success : true, data : data});
}

module.exports = controllers;