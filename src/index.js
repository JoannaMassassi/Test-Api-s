const express = require ('express')
const app = express()
const morgan = require('morgan') 

//morgan es un middleware, lo que significa que es una funcion que procesa datos antes de que los reiba el servidor

//settings
app.set('port',process.env.PORT|| 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes
app.use(require('./routes/index'));
app.use('/api/weapons', require('./routes/weapons'));
//starting server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`)
});