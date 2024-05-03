// ejecutar la validacion registerSchema = z.objet -- tiene su metodo parse() ejecutamos aqui

export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // cuando pasa la validacion
        next()
    } catch (error) {
        // return res.status(400).json(error)
        // return res.status(400).json({error: error.errors.map(error => error.message)})
        // return res.status(400).json({message: error.errors.map(error => error.message)})
        return res.status(400).json( error.errors.map((error) => error.message))
    }
}
