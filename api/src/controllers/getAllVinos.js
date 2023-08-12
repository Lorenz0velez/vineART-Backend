const { Vino } = require("../db");

  
  const getAllVinos = async (name) => {
    try {
      let dbRestaurants = await Vino.findAll({
        where: {
            active: true
          }
      });
  
      if (name) {
        return await dbRestaurants.filter((bar) =>
          bar.name.trim().toLowerCase().includes(name.trim().toLowerCase())
        );
      }
        return dbRestaurants
  
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  const getAllVinos2 = async () => {

    const vino = await Vino.findAll({
      where: {active: true},
    });
    return vino
  };

  
  module.exports = getAllVinos;