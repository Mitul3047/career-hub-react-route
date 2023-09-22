import { useEffect, useState } from "react";
import Job from "../job/job";


const FeaturedJobs = () => {
    
    const [jobs, setjobs] = useState([]);

    // This is not the best way to load data
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('/jobs.json')
        .then(r => r.json())
        .then(data => setjobs(data))
    },[])

    return (
        <div className="my-32">
           <div>
            <h2 className="text-5xl text-center">Featured Jobs</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className={dataLength === jobs.length? `hidden`:`justify-center flex mt-10 `} >
                <button 
                onClick={()=> setDataLength(jobs.length)}
                className="btn bg-fuchsia-400 text-white">Show All Jobs</button>
                </div>
        </div>
    );
};

export default FeaturedJobs;