const { Vino } = require("../db");
const {Op} = require ('sequelize')


const getVinosByName = async (vinoName) =>{
    const searchVino = vinoName.toLowerCase();
    console.log('let searchVino:', searchVino);

    const vinos = await Vino.findAll({
        where: {
            name : {
            [Op.iLike] : `%${searchVino}%`
            },
            active: true
        }
    })
    console.log('vinos:', vinos);

    if(!vinos) throw new Error ('No matches found')

    return vinos;
}

module.exports= getVinosByName;

