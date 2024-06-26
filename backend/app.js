const express = require('express');
const bodyParser = require('body-parser');
const tablaRutas = require('./routes/routes');
const { sequelize } = require('./models/model');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', tablaRutas);

sequelize.authenticate()
    .then(() => console.log('Conexion exitosa a la DB'))
    .catch(error => console.log(`El error de conexion es: ${error}`));

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/');
});
