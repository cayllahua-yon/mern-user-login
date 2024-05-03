import { createContext, useContext, useEffect, useState} from "react";
import {registerRequest, loginRequest, verifyTokenRequest} from "../api/auth.api";
import Cookies  from "js-cookie"

const AuthContext = createContext();

// creamos un Hook para usar ese contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de AuthProvider")
    }
    return context
}

//------------------------------------------------------------------------
export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true)

    //signup crear cuenta agregar
    const signUp = async (user) => {
        try {
            const result = await registerRequest(user);
            // console.log(result);
            setUser(result.data);
            setIsAuthenticated(true)
        } catch (error) {
            // console.log(error.response.data.message) 
            // setErrors(error.response.data.message)
            setErrors(error.response.data)
        }
    }

    //login acceder iniciar session
    const signIn = async (user ) => {
        try {
            const result = await loginRequest(user);
            // console.log(result)
            setIsAuthenticated(true);
            setUser(result.data);
        //=======================UNA VERIFICACION DE TOKEN AL BACKEND por mas que te logues al refrescar la pagina isAuth se vuelve false
        } catch (error) {
            // console.error(error)
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }

            // setErrors([error.response.data.message]);
            setErrors([error.response.data]);

        }    
    }

    // una manera de cerrar login
    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    } 
    
    // manejar errores mesajes
    useEffect(()=>{
        if(errors.length>0) {
            const timer = setTimeout(()=>{
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer)
        }

    },[errors])

    // consultamos si existe una cooki que tenga el token
    useEffect(()=>{
        ( async ()=>{
            const cookies = Cookies.get(); //obtener los valores
        
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);                
            }            
                try {
                    const result =  await verifyTokenRequest(cookies.token);
                    // console.log(result)
                    if(!result.data){
                        setIsAuthenticated(false);
                        setLoading(false);
                        return; //setUser(null)
                    }

                    setIsAuthenticated(true);
                    setUser(result.data)
                    setLoading(false);
                    
                } catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
            
        })();
    },[])

    return (
        <AuthContext.Provider value={{signUp, signIn, user, loading, isAuthenticated, errors, logout}}>
            {children}
        </AuthContext.Provider>
    )
}