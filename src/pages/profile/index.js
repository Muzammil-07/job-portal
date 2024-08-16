// pages/profile.js

import React from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Header from '@/components/Header';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Save the updated user information
    // Here you would usually make a request to your backend to update the user info
    setIsEditing(false);
  };

  return (
    <div>
        <Header />
    <Container className="mt-5 bg-white">
      <Row className="justify-content-md-center">
        <Col md="auto">
  
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={6}>
          <h2>Profile</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Button variant="primary" onClick={isEditing ? handleSaveClick : handleEditClick}>
              {isEditing ? 'Save' : 'Edit Profile'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Profile;
