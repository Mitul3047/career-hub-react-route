

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="border rounded-lg mt-8">
            <div className="card card-compact  bg-base-100 shadow-xl">
                <img src={logo} alt={job_title} className="w-28 ml-4 mt-4" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4 ">
                        <button className="border rounded text-fuchsia-500 border-fuchsia-500 px-5 py-2">{remote_or_onsite}</button>
                        <button className="border rounded text-fuchsia-500 border-fuchsia-500 px-5 py-2">{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <h3>Location: {location}</h3>
                        <h3>Salary: {salary}</h3>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-fuchsia-400 text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;