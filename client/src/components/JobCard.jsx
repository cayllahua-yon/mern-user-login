import {useJobs} from "../context/JobsContexto";
import {Link} from "react-router-dom"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
// import {promt}

function JobsCard({job}) {

    const {deleteJob} = useJobs();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <div className="flex gap-x-2 items-center">
                    <button onClick={()=> {deleteJob(job._id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                    <Link to={`/jobs/${job._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</Link>
                </div>
            </header>
            <h2 className="text-slate-300">{job.description}</h2>     
            {/* <p>{new Date(job.date).toLocaleDateString()}</p>                    */}
            <p>{dayjs(job.date).utc().format('DD/MM/YYYY')}</p>                   
        </div>
    )
}

export default JobsCard;