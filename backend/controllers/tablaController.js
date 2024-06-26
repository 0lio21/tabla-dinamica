const { TablaArticulos, sequelize } = require('../models/model');

exports.agregarCampo = async (req, res) => {
    const { nombreCampo, tipoCampo } = req.body;

    try {
        const queryAlterarTabla = `ALTER TABLE tablaarticulos ADD COLUMN ${nombreCampo} ${tipoCampo}`;
        await sequelize.query(queryAlterarTabla);

        res.status(200).json({ mensaje: 'Campo agregado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.guardarDatosTabla = async (req, res) => {
    const { datos } = req.body;

    try {
       
        const columnas = Object.keys(datos[0]).join(', ');
        const valores = datos.map(fila => `(${Object.values(fila).map(valor => `'${valor}'`).join(', ')})`).join(', ');

        const queryInsertar = `INSERT INTO tablaarticulos (${columnas}) VALUES ${valores}`;
        await sequelize.query(queryInsertar);

        res.status(200).json({ mensaje: 'Datos guardados correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
