import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    axios.post('https://localhost:3000/auth/login', { email, password })
        .then(response => {
            console.log('Login successful:', response.data);
        })
        .catch(error => {
            console.error('There was an error logging in:', error);
        });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <Card style={{ width: "25rem" }} className="shadow-sm p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center mt-3">
              <small>
                Don't have an account? <a href="#register">Sign up</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
