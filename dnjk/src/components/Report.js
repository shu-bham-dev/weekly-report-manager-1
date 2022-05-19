import React, { useState } from "react";
import "./Report.css";
import { Container, Row, Col, Form,Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Report() {
  const [stars, setStars] = useState(0);

  var example = {
    size: 40,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
      console.log(newValue);
    }
  };
const handleSubmit=(e)=>{
  e.preventDefault()
   alert("form submitted succesfully");
 }
  return (
    <Container width="xs">
      
        <Form className="form mt-3">
        <h3 className="weekly">Weekly Report</h3>
        <Row className="mb-3 justify-content-md-center ">
          <Col xs lg="3">
            <Form.Group as={Col} controlId="from">
              <Form.Label className="label">From</Form.Label>
              <Form.Control className="input" type="date" />
            </Form.Group>
          </Col>

          <Col xs lg="3">
            <Form.Group as={Col} controlId="to">
              <Form.Label className="label"><b>To</b></Form.Label>
              <Form.Control className="input" type="date" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-md-center">
          <Col xs lg="3">
            <Form.Label className="label">Task Name</Form.Label>
            <Form.Control className="input" type="text" placeholder="Task Name" />
          </Col>
          <Col xs lg="3">
            <Form.Label className="label">No. of Hours</Form.Label>
            <Form.Control className="input" type="number" placeholder="No. of Hours" />
          </Col>
        </Row>
        <Row className="mb-3 justify-content-md-center">
        <Col xs lg="6">
        <Form.Label className="label">Description</Form.Label>
    <Form.Control className="input" as="textarea" placeholder="Add description of your task..." rows={4} />
    </Col>
        </Row>
        <Row className="mb-3 justify-content-md-center">
        <Col xs lg="6">
        <Form.Label className="label">Satisfactory score</Form.Label>
     <ReactStars {...example} />
    </Col>
        </Row>
        <Row className="mb-3 justify-content-md-center">
        <Col xs lg="6">
        <Form.Label className="label">Remarks</Form.Label>
    <Form.Control className="input" as="textarea" placeholder="Any feedback Please share with us..." rows={4} />
    </Col>
        </Row>
        <Row className="mb-3 justify-content-md-end">
        <Col xs lg="4">
        <Button variant="success" onClick={handleSubmit}>Add</Button>{' '}
    </Col>
        </Row>
        </Form>
    </Container>
  );
}

export default Report;
