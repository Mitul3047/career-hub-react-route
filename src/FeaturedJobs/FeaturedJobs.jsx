import { useEffect, useState } from "react";
import Job from "../job/job";


const FeaturedJobs = () => {
    
    const [jobs, setjobs] = useState([]);

    useEffect(()=>{
        fetch('/jobs.json')
        .then(r => r.json())
        .then(data => setjobs(data))
    },[])

    return (
        <div className="mt-32">
           <div>
            <h2 className="text-5xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className="grid grid-cols-2">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;