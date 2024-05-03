import axios from "./axios";

export const getJobsRequest = async () => await axios.get('/jobs');
export const createJobRequest = async (job) => await axios.post('/job', job);
// export const updateJobRequest = async ( newJob) => await axios.put(`/job/${newJob._id}`, newJob); // distinto
export const updateJobRequest = async (id, newJob) => await axios.put(`/job/${id}`, newJob); 
export const deleteJobRequest = async (id) => await axios.delete(`/job/${id}`); 
export const getJobRequest =  async (id) =>  await axios.get(`/job/${id}`);
 