
 
 export const authRequired = (req , res, next) => {
    // console.log("validando token para acceder al perfil");
    // console.log(req.headers)
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "No token, autentificación denegada"});

    //decoded = user
    
    next();
 }