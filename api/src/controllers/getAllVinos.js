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
      console.log('aaaaaaaaaaaaaaa error')
      next(err)
    }
  }
  
  module.exports = getAllVinos;