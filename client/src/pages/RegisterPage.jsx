import {useForm} from "react-hook-form"
// import {registerRequest} from "../api/auth.api";
import {useAuth} from "../context/AuthContext"
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"

function RegisterPage() {
    const {register,handleSubmit, formState:{ errors},} = useForm();
    const {signUp, user, isAuthenticated, errors: registerErrors } = useAuth();
    

    const  navigate = useNavigate();


    useEffect(()=>{
        if(isAuthenticated) navigate('/jobs')
    }, [isAuthenticated])

    // console.log(user);
    const onSubmitMy = handleSubmit( async(values)=>{
        // console.log(values);
        const result = await signUp(values);
        console.log(result)
    });

    return (
        <div className=" h-[calc(100vh-100px)] flex items-center justify-center ">
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <h1 className="text-2xl font-bold my-2">Register</h1>

                {
                    registerErrors?.map((error, i) => (
                        <div key={i} className="bg-red-500 p-2 mb-2">
                            {error}
                        </div>
                    ) )
                }
                <form onSubmit={onSubmitMy}      >
                    {/* <input type="text" name="username"/> */}
                    <input type="text" {...register("username", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="nombre usuario"/>
                    {errors.username && (<p className="text-red-500">Nombre del usuario es requerido</p>)}

                    <input type="email" {...register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="email" />
                    {errors.email && (<p className="text-red-500">Email es requerido</p>)}
                    
                    <input type="password" {...register("password", {required: true} )}  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="contrasena" />
                    {errors.password && (<p className="text-red-500">Contraseña es requerido</p>)}
                    
                    <button type="submit" className="mt-2">
                        Registrar
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between">
                    Ya tienes una cuenta? <Link to={"/login"} className="text-sky-500">Iniciar sesión</Link>  
                </p>
            </div>
        </div>
    )
}
export default RegisterPage