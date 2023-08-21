const { Router } = require('express');
const getVinosByName = require('../controllers/getVinosByName');
const getAllVinos = require('../controllers/getAllVinos');
const getVinoByID = require('../controllers/getVinoById');
const { createVino } = require('../controllers/createVino');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/countries', getAllCountriesAPI);

router.get('/vinos', async(req, res, next)=>{
    const { name } = req.query;
    if (name) {
        try {
            const vinos = await getVinosByName(name)
            return res.status(200).json(vinos) 
        } catch (error) {
            return res.status(400).json({error:error.message}) 
        }
    }
    try {
        const allVinos = await getAllVinos();
        return res.status(200).json(allVinos);
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})

router.get('/wines/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const vino = await getVinoByID(id)
        res.status(200).json(vino);
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})

router.post('/create',async(req, res, next)=>{
    const {
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
    linea_del_vino
    } = req.body

         if(!name) return res.status(404).send({msg: 'Required NAME is missing'})
         if(!bodega) return res.status(404).send({msg: 'Required BODEGA is missing'})
         if(!imagen) return res.status(404).send({msg: 'Required IMAGEN is missing'})
         if(!descripcion) return res.status(404).send({msg: 'ReQUIRED DESCRIPCION is missing'})
         if(!categoria) return res.status(404).send({msg: 'Required CATEGORIA is missing'})
         if(!varietal) return res.status(404).send({msg: 'Required VARIETAL is missing'})
         if(!composicion_varietal) return res.status(404).send({msg: 'Required COMPOSICION VARIETAL is missing'})
         if(!añejamiento) return res.status(404).send({msg: 'Required AÑEJAMIENTO is missing'})
        //  if(!region) return res.status(404).send({msg: 'Required REGION is missing'})
        //  if(!contenido) return res.status(404).send({msg: 'Required CONTENIDO is missing'})
        //  if(!se_vende_por) return res.status(404).send({msg: 'Required SE VENDE POR is missing'})
         if(!temperatura_de_servicio) return res.status(404).send({msg: 'Required TEMPERATURA DE SERVICIO is missing'})
         if(!linea_del_vino) return res.status(404).send({msg: 'Required LINEA DEL VINO is missing'})

        try {
            const newVino = await createVino(
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
                linea_del_vino)
            newVino.msg = 'CREADO CORRECTAMENTE';
            res.status(200).send(newVino);

        } catch (error) {
            console.log(error);
            console.log("no se creo correctamente el libro");
            res.status(400).json({ error: error.message });
        }
})

module.exports = router;

