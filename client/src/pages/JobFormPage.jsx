import {useForm} from "react-hook-form"
import {useJobs} from "../context/JobsContexto"
import {useNavigate, useParams} from "react-router-dom"
import { useEffect} from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function JobFormPage() {
    const {register, handleSubmit , setValue} = useForm();
    const {createJob, getJob, updateJob} = useJobs();
    const navigate = useNavigate();
    const params = useParams();

    // const [job, setJob] =useState(null)
    // console.log(createJob(1))


    // console.log(params)
    useEffect(()=>{
        (async ()=>{
            if(params.id){
               const result = await getJob(params.id);
            //    console.log(result)
            //    console.log(dayjs.utc(result.date).utc().format('YYYY-MM-DD'))
            //    setJob(result);
               setValue("title", result.title);
               setValue("description", result.description)
               setValue("date", dayjs.utc(result.date).format('YYYY-MM-DD'))
            }
        })()
    }, [])
    
    //metodo
    const onSubmit = handleSubmit( (data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
        }
       
        if (params.id) {
            // updateJob(params.id, data);
            // updateJob(params.id, {
            //     ...data,
            //     date: dayjs.utc(data.date).format() 
            // });   
            updateJob(params.id, dataValid)
        } else {
            createJob(dataValid);
            // createJob(data);
            // createJob({
            //     ...data,
            //     date: dayjs.utc(data.date).format()
            // });
        }
        navigate("/jobs");
    });

    return (
        <div className=" h-[calc(100vh-100px)] flex items-center justify-center ">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    {/* nota el ...REGISTER representa estos => onChange ,value ,name */}
                    <label htmlFor="title">Titulo</label>
                    <input type="text" placeholder="Titulo" {...register("title")} autoFocus className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />
                    
                    <label htmlFor="description">Descripción</label>                
                    <textarea rows={3} placeholder="Descripción" {...register("description")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"></textarea>
                    
                    <label htmlFor="title">Fecha</label>
                    <input type="date" {...register("date")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default JobFormPage;