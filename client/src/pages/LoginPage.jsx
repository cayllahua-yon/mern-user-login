import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
    const {register, handleSubmit, formState:{ errors},} = useForm();
    const { signIn,  errors: loginErrors , isAuthenticated} = useAuth();    

    const  navigate = useNavigate();
    // useEffect(()=>{
    //     if(isAuthenticated) navigate('/jobs')
    // }, [isAuthenticated])

    const onSubmitMy = handleSubmit( async (data) => {        
        await signIn(data);
        // console.log(result)
    });

    useEffect(()=>{
        if (isAuthenticated) navigate("/jobs")
    }, [isAuthenticated])

    return (
        <div className=" h-[calc(100vh-100px)] flex items-center justify-center ">
            
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-2xl font-bold mb-2">Login</h1>
                {
                loginErrors?.map((error, i) => (
                    <div key={i} className="bg-red-500 p-2 my-2 rounded-md">
                        {error}
                    </div>
                ) )
            }
            <form onSubmit={onSubmitMy} >

                <input type="email" {...register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2" placeholder="email" />
                {errors.email && (<p className="text-red-500">Email es requerido</p>)}
                
                <input type="password" {...register("password", {required: true} )}  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2" placeholder="contrasena" />
                {errors.password && (<p className="text-red-500">Contraseña es requerido</p>)}
                
                <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                No tiene una cuenta? <Link to={"/register"} className="text-sky-500">Inscribirse</Link>  
            </p>
            </div>
        </div>
    )
}
export default LoginPage