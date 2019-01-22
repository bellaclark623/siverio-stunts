import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { FaMobileAlt } from "react-icons/fa";

import Page from "../../components/page";

export default () => (
  <Page
    id="contact"
    title="Contact"
    description="This is about really cool stuff."
  >
    <div className="row">
      <main className="col-12 col-md-9">
        <h3>Contact Us</h3>
        <p>I would love to hear from you. Fill out the form below!</p>
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
  </Page>
);
