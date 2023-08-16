const { Vino } = require("../db");


const createVino = async(
    name, 
    bodega, 
    imagen, 
    descripcion, 
    categoria, 
    varietal, 
    composicion_varietal, 
    añejamiento, 
    region, 
    contenido, 
    se_vende_por, 
    temperatura_de_servicio, 
    linea_del_vino) => {
    
    try {
        const vinoCreado = await Vino.create({
            id: Math.floor((Math.random() * 1000)) + Date.now().toString(),
            name:name, 
            bodega:bodega, 
            imagen:imagen, 
            descripcion:descripcion, 
            categoria:categoria, 
            varietal:varietal, 
            composicion_varietal:composicion_varietal, 
            añejamiento:añejamiento, 
            region:region, 
            contenido:contenido, 
            se_vende_por:se_vende_por, 
            temperatura_de_servicio:temperatura_de_servicio, 
            linea_del_vino:linea_del_vino
        })
            return vinoCreado;
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    createVino
}
