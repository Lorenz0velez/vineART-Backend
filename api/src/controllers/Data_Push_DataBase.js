const axios = require('axios');
const { Vino } = require("../db");
axios.default.timeout = 30000;


// const Data_Push_Vinos = async () => {
//   try {
//     const response = require('../../vinos_y_bodegas.json'); // Cargar el archivo JSON utilizando la ruta
//       const mapVinos = response?.map((data) => {
//       return {
//         id: data.id ? data.id : Math.floor((Math.random() * 1000)) + Date.now().toString(),
//         name: data.vinos.name,
//         bodega: data.name,
//         image: data.vinos.image,
//         descripcion: data.vinos.descripcion,
//         categoria: data.vinos.categoria,
//         varietal: data.vinos.varietal,
//         composicion_varietal: data.vinos.composicion_varietal,
//         añejamiento: data.vinos.añejamiento,
//         region: data.vinos.region,
//         contenido: data.vinos.contenido,
//         se_vende_por: data.vinos.se_vende_por,
//         temperatura_de_servicio: data.vinos.temperatura_de_servicio,
//         linea_del_vino: data.vinos.linea_del_vino,
//       };
//     });

//     await Vino.bulkCreate(mapVinos, { validate: true });
//     console.log('bares creados')
//   } catch (e) {
//     console.log('hubo un error')
//     console.log(e);
//   }
// };

const generateUniqueID = (() => {
  const generatedIDs = new Set();

  return (minValue = 1, maxValue = 1000000) => {
    while (true) {
      const newID = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      if (!generatedIDs.has(newID)) {
        generatedIDs.add(newID);
        return newID;
      }
    }
  };
})();

// Uso de la función para generar IDs únicos
// const newID1 = generateUniqueID();
// const newID2 = generateUniqueID();

// console.log(newID1);
// console.log(newID2);


const Data_Push_Vinos = async () => {
  try {
    const response = require('../../vinos_y_bodegas.json'); // Cargar el archivo JSON utilizando la ruta

    const mapVinos = [];
    for (let i = 0; i < response.length; i++) {
      const bodega = response[i];
      
      for (let j = 0; j < bodega.vinos.length; j++) {
        const vino = bodega.vinos[j];
        
        mapVinos.push({
          // id: vino.id ? vino.id : Math.floor((Math.random() * 1000)) + Date.now().toString(),
          id: generateUniqueID(),
          name: vino.name,
          bodega: bodega.name,
          image: bodega.image,
          descripcion: bodega.descripcion,
          categoria: vino.categoria,
          varietal: vino.varietal,
          composicion_varietal: vino.composicion_varietal,
          añejamiento: vino.añejamiento,
          region: vino.region,
          contenido: vino.contenido,
          se_vende_por: vino.se_vende_por,
          temperatura_de_servicio: vino.temperatura_de_servicio,
          linea_del_vino: vino.linea_del_vino,
        });
      }
    }

    await Vino.bulkCreate(mapVinos, { validate: true });
    console.log('vinos creados');
  } catch (e) {
    console.log('hubo un error');
    console.log(e);
  }
};

module.exports = {
  Data_Push_Vinos,
};

