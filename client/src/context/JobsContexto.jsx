import { createContext, useContext, useState } from "react";
import {createJobRequest, deleteJobRequest, getJobRequest, getJobsRequest, updateJobRequest} from "../api/jobs.api";

const JobContexto = createContext();

//creamos nuestro Hook
export const useJobs = () => {
    const context = useContext(JobContexto);
    if (!context){
        throw new Error("useJobs debe usarse dentro de un JobProvider")
    } 
    return context;
} 

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    
    const getJobs = async () => {
        try {
            const result = await getJobsRequest();
            // console.log(result.data);
            setJobs(result.data);
        } catch (error) {
            console.error(error)
        }
    }

    const createJob = async (job) => {
        try {
            const result = await createJobRequest(job)
            console.log(result );
        } catch (error) {
            console.error(error)
        }

    }

    const deleteJob = async (id) => {
        try {
            const result = await deleteJobRequest(id);
            // console.log(result);
            if (result.status === 204) {
                const newJobs = jobs.filter((job)=> job._id !== id)        
                setJobs(newJobs);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getJob = async (id) => {
        try {
            const result = await getJobRequest(id);
            // console.log( result.data)
            return result.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateJob =  async (id, newJob) => {
        try {
            const result = await updateJobRequest(id, newJob);
            console.log(result);
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <JobContexto.Provider value={{jobs, createJob, getJobs, deleteJob, getJob, updateJob}}>
            {children}
        </JobContexto.Provider>
    )
}