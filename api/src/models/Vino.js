const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Vino', {
    id: {
      type: DataTypes.TEXT, // "id": "GLQvEAAAQBAJ", -->> books4all
      allowNull: false,
      primaryKey: true,
      // defaultValue: Math.floor((Math.random() * 1000)) + Date.now().toString()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bodega: {
      // type: DataTypes.STRING,
      type: DataTypes.JSON,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(10000),
      defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgpsvinos.com%2F2022%2F05%2F23%2Frutini-presento-su-linea-dominio-en-una-charla-exclusiva-organizada-por-winexperts%2F&psig=AOvVaw2Pln9kPECFg9iZKPH1zFhb&ust=1691727159814000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjhzfOc0YADFQAAAAAdAAAAABAF",
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(10000),
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    varietal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    composicion_varietal: {
      type: DataTypes.STRING,
      defaultValue:"100%",
      allowNull:false,
    },
    añejamiento: {
      type: DataTypes.STRING,
      defaultValue:"12 meses en roble francés",
      allowNull:false,
    },
    region: {
      type: DataTypes.STRING,
      defaultValue:"Mendoza, Argentina",
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING,
      defaultValue:"750ml",
      allowNull: false,
    },
    se_vende_por: {
      type: DataTypes.STRING,
      defaultValue:"Caja x6 botellas",
      allowNull: false,
    },
    temperatura_del_servicio: {
      type: DataTypes.STRING,
      defaultValue:"Indistinto",
      allowNull: false,
    },
    linea_del_vino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true
    },

  },{timestamps:false});
};
