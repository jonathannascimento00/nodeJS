const Sequelize = require('sequelize')
const sequelize = new Sequelize('databaseName', 'user', 'password', {
    host: "localhost",
    dialect: 'mysql'
})

/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Não conseguiu se conectar " + erro)
})*/

//Comando utilizado para definir o modelo de uma tabela no MySQL
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Comando utilizado para inserir dados no banco
/*Postagem.create({
    titulo: "EU SOU UM CARA LEGAL",
    conteudo: "shuoiahurahuia SHAEU RAU9HAUOGRAUEG ABAEUGFUGEFUAGEUISBAAEAUAGFUIESGIU AUAUABUAB COOL."
})*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Utilizado para criar a tabela no banco de dados MySQL
//Postagem.sync({force: true})
//Usuario.sync({force: true})