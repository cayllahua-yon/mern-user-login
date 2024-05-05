import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const {isAuthenticated, logout, user}= useAuth();
    // console.log(isAuthenticated)

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 ">
            <Link to={ isAuthenticated ? "/jobs" : "/"}>  {/* condicion para ruta */}
                {
                    isAuthenticated ? <h1 className="text-2xl font-bold"> Administrador de Trabajos </h1> : <h1 className="text-2xl font-bold"> Perú programando </h1>
                }
                
            </Link>
            <ul className="flex gap-x-2">
                {
                    isAuthenticated ? (
                        <>
                            <li>
                                Bienvenido {user.username}
                            </li>
                            <li>
                                <Link to={"/jobs/new"} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Añade Trabajo</Link>
                            </li>
                            <li>
                                <Link to={"/"} onClick={()=> logout() } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar sesión</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to={"/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Acceso</Link>
                            </li>
                            <li>
                                <Link to={"/register"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registro</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;