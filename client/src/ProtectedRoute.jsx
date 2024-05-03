import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext"; 
function ProtectedRouter() {
    const {user,loading, isAuthenticated} = useAuth();

    // console.log(user, loading, isAuthenticated)
    if (loading) return (<h1> Cargando....</h1>)

    if (!loading && !isAuthenticated) return <Navigate to='/login' replace/>  //no volver ala ruta anterior

    //continua con el componente que esta adentro
    return  <Outlet />
}

export default ProtectedRouter;