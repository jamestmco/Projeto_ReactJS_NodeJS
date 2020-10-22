const express = require('express');
const app = express();

// importação de rotas [1]
const utilizador_routes = require('./routes/utilizador_routes')

//Configurações
app.set('port', process.env.PORT || 3005);

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Middlewares
app.use(express.json());

//Rota
app.use('/utilizador_routes', utilizador_routes);

app.use('/teste',(req,res)=>{
    res.send("Rota TESTE.");
});

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'));
})



