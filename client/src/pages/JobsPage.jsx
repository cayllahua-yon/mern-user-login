// import {useAuth} from "../context/AuthContext"
import { useEffect } from "react";
import { useJobs } from "../context/JobsContexto";
import JobCard from "../components/JobCard"
function JobsPage() {
    // const {user} = useAuth();
    const {jobs, getJobs} = useJobs();
    // console.log( getJobs)

    useEffect(()=>{
        getJobs();
    }, [])

    if(jobs.length === 0) return (<h2>No hay trabajos</h2>)

    return (
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-2">            
            { 
                jobs.map((job) => (
                    <JobCard job={job} key={job._id} />
                ))
            }
        </div>
    )
}

export default JobsPage;