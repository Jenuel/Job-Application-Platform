import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import jobTestData from "./testData"; // Import the test data

function JobPage() {
  return (
    <div>
      <Button variant="primary" style={{ marginBottom: "1rem" }}> Create Job </Button>
      {jobTestData.map((job) => (
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
              <Button variant="primary">Apply</Button>
              <Card.Footer className="text-muted">
                Created At: {new Date(job.created_at).toLocaleString()}
              </Card.Footer>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default JobPage;
