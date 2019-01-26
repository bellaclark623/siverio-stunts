import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FaMobileAlt } from "react-icons/fa";

import InteriorLayout from "../../layouts/InteriorLayout";

export default () => (
  <InteriorLayout
    id="contact"
    title="Contact Us"
    description="I would love to hear from you. Fill out the form below!"
  >
    <div className="row">
      <main className="col-12 col-md-9">
        <Form>
          <FormGroup>
            <Label for="contactFormFullName">Full Name</Label>
            <Input type="text" name="fullName" id="contactFormFullName" />
          </FormGroup>
          <FormGroup>
            <Label for="contactFormPhoneNumber">Phone Number</Label>
            <Input type="tel" name="phoneNumber" id="contactFormPhoneNumber" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </main>
      <aside className="col-12 col-md-3">
        <h4>Contact Details</h4>
        <table>
          <tr>
            <td>
              <FaMobileAlt />
            </td>
            <td>+1 917-123-1234</td>
          </tr>
        </table>
      </aside>
    </div>
  </InteriorLayout>
);
