import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const IdInt = parseInt(id)
    // console.log(jobs, id);

    const job = jobs.find(job => job.id === IdInt)
    console.log(jobs,job ,IdInt);
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information} = job
    return (
        <div>
            <h2 className="text-3xl text-center py-36">Job DetailS</h2>
            <div className="grid grid-cols-4 gap-6 ">
                <div className="col-span-3">
                    <p className="mb-6"><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="mb-6"><span className="font-bold">Job Description:</span>{job_description}</p>
                    
                        <p className="mb-6 font-bold">Educational Requirements:</p>
                        <p className="mb-6">{educational_requirements}</p>
                        <p className="font-bold pb-6">Experiences:</p>
                        <p>{experiences}</p>
                    
                </div>
                <div className="p-7">
                    <h3 className="border-b">Job Details</h3>
                    <p>Salary: {salary}</p>
                    <p>Job Title: {job_title}</p>
                    <h3 className="border-b">Job Details</h3>
                    <p>Phone: {contact_information.phone}</p>
                    <p>Email: {contact_information.email}</p>
                    <p>Address: {contact_information.address}</p>
                    <button className="btn">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;