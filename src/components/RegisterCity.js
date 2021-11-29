import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterCity = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card ">
        <h5 className="card-header">Register a city</h5>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name of the city</Form.Label>
              <Form.Control type="text" placeholder="Enter city name" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vaccine applied</Form.Label>
              <Form.Control type="text" placeholder="Name of the vaccine" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCity;
