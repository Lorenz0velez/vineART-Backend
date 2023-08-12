const { Router } = require('express');
const getVinosByName = require('../controllers/getVinosByName');
const getAllVinos = require('../controllers/getAllVinos');
const getVinoByID = require('../controllers/getVinoById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/countries', getAllCountriesAPI);

router.get('/:id', async (req, res) => {

    const { id } = req.params;
    console.log('vinoID', id);
    
    try {
        const vino = await getVinoByID(id)
        res.status(200).json(vino);
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})


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

module.exports = router;
