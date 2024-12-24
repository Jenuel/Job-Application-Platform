import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const JobDetailsPage = () => {
  const { jobId } = useParams(); 
  const [jobDetails, setJobDetails] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details.");
        }
        const data = await response.json();
        setJobDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]); 

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Job Details</h1>
      {jobDetails ? (
        <div>
          <h2>{jobDetails.title}</h2>
          <p>{jobDetails.description}</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Salary:</strong> {jobDetails.salary}</p>
        </div>
      ) : (
        <p>No job details found.</p>
      )}
    </div>
  );
};

export default JobDetailsPage;
