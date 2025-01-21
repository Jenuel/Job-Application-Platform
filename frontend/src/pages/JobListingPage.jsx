import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';

function JobListingPage() {
    const [ownedJobs, setOwnedJobs] = useState(null); 
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

  return (
    <div>
        {ownedJobs.map((job) => (
            <Link to={`/jobs/${job.id}`} key={job.id} style={{ textDecoration: "none" }}>
            <Card style={{ marginBottom: "1rem", cursor: "pointer" }}>
                <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Status: {job.status} | Rating: {job.rating}
                </Card.Subtitle>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text>
                    <strong>Wage:</strong> ${job.wage} | <strong>Account ID:</strong> {job.acc_id}
                </Card.Text>
                <Card.Footer className="text-muted">
                    Created At: {new Date(job.created_at).toLocaleString()}
                </Card.Footer>
                </Card.Body>
            </Card>
            </Link>
        ))}
    </div>
  )
}

export default JobListingPage