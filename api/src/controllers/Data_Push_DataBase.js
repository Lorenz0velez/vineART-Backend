const axios = require('axios');
const { Vino } = require("../db");
axios.default.timeout = 30000;


const Data_Push_Vinos = async () => {
  try {
    const response = require('../../bodegas_vinos.json'); // Cargar el archivo JSON utilizando la ruta
      const mapVinos = response?.map((data) => {
      return {
        id: data.id ? data.id : Math.floor((Math.random() * 1000)) + Date.now().toString(),
        name: data.name,
        bodega: data.bodega,
        image: data.image,
        descripcion: data.descripcion,
        categoria: data.categoria,
        varietal: data.varietal,
        composicion_varietal: data.composicion_varietal,
        añejamiento: data.añejamiento,
        region: data.region,
        contenido: data.contenido,
        se_vende_por: data.se_vende_por,
        temperatura_de_servicio: data.temperatura_de_servicio,
        linea_del_vino: data.linea_del_vino,
      };
    });

    await Vino.bulkCreate(mapVinos, { validate: true });
    console.log('bares creados')
  } catch (e) {
    console.log('hubo un error')
    console.log(e);
  }
};

module.exports = {
  Data_Push_Vinos,
};

