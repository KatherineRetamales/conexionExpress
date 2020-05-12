//crear servidor con express
const express = require('express');
const app = express();
const morgan = require('morgan');
 

app.set('port', 3000);

app.use(express.json());
app.use(morgan('combined'));
app.use('/', require('./src/routers'));

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});
