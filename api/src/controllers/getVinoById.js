const { Vino } = require("../db");


const getVinoByID = async (id) => {

const vino = await Vino.findOne({ where: { id: id } });
  if (vino === null) {
    throw new Error('Vino not found es igual a null'); 
  }
  return vino;
};

module.exports = getVinoByID;