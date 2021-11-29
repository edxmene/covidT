import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterPerson = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card ">
        <h5 className="card-header">Register a patient</h5>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
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

            <Form.Group className="mb-3 d-flex justify-content-between">
              <Form.Label>Dosis applied:</Form.Label>
              <Form.Check
                label="One dosis"
                type="radio"
                name="dosis"
                value="one dosis"
                checked
              />
              <Form.Check
                label="Two dosis"
                type="radio"
                name="dosis"
                value="two dosis"
              />
              <Form.Check
                label="Three dosis"
                type="radio"
                name="dosis"
                value="three dosis"
              />
              <Form.Check
                label="None"
                type="radio"
                name="dosis"
                value="cero dosis"
              />
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

export default RegisterPerson;
