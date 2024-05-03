import Job from "../models/job.model.js";

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({user: req.user.id}).populate('user'); // para traer respecto al usuario logeado// tambien los datos del usuario
        res.json(jobs);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createJob = async (req, res) => {
    try {
        const {title, description, date} = req.body;
        const newJob = new Job({
            title,
            description,
            date,
            user: req.user.id
        });

        const savedJob = await newJob.save();
        res.json(savedJob);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteJob = async (req, res) => {
    try {
        const result = await Job.findByIdAndDelete(req.params.id);
        if(!result) return res.status(404).json({message: "No existre puesto de trabajo"})

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})       
    }
};

export const updateJob = async (req, res) => {
    try {
        const result = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!result) return res.status(404).json({message: "No existe Job"})
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getJob = async (req, res) => {
    try {
        const resultJob = await Job.findById(req.params.id).populate('user');
        if(!resultJob) return res.status(404).json({message: "No existe Job"})
        res.json(resultJob)
    } catch (error) {
        return res.status(500).json({message: error.message})    
    }
}