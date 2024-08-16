import { Button, Form } from "react-bootstrap";

export default function Forms() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control type="email" placeholder="Enter your email here!" />
        </Form.Group>

        <Form.Group className="m-2 mb-4">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Comment HERE !" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-4  px-3">
          Submit
        </Button>
      </Form>
    </>
  );
}
