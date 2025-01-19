import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setFirstNameError('');
        setLastNameError('');
        setUsernameError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setError('');

        let isValid = true;

        // Field validations
        if (!firstName.trim()) {
            setFirstNameError('First name is required');
            isValid = false;
        }

        if (!lastName.trim()) {
            setLastNameError('Last name is required');
            isValid = false;
        }

        if (!username.trim()) {
            setUsernameError('Username is required');
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        }

        if (!userType.trim()) {
            setError('Please select a user type');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const formData = {
            firstName,
            lastName,
            username,
            password,
            userType,
        };

        axios.post('http://localhost:3000/auth/register', formData)
        .then(response => {
            console.log('Registration successful:', response.data);
            navigate('/');
        })
        .catch(error => {
            setError('An error occurred. Please try again.');
        });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Register</Card.Title>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        isInvalid={!!firstNameError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {firstNameError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        isInvalid={!!lastNameError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {lastNameError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        isInvalid={!!usernameError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {usernameError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!passwordError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {passwordError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        isInvalid={!!confirmPasswordError}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {confirmPasswordError}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="userType">
                                    <Form.Label>User Type</Form.Label>
                                    <Form.Select
                                        value={userType}
                                        onChange={(e) => setUserType(e.target.value)}
                                        isInvalid={!!error}
                                        required
                                    >
                                        <option value="">Select...</option>
                                        <option value="client">Client</option>
                                        <option value="freelancer">Freelancer</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {error}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Register
                                </Button>
                                <p>Already have an account? <a href="/">Login</a> </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationPage;
