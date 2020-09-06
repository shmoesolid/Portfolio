import React from "react";
import { Card, CardTitle, CardText } from "../components/Card";

function Contact() {
  return (
    <Card>
      <CardTitle title="Contact" extClass="text-left" />
      <hr />
      <CardText>
        <form action="mailto:shmoesolid@gmail.com">
          <div class="form-group">
              <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" />
              <br />
              <textarea class="form-control" id="message" placeholder="Enter your message" rows="5"></textarea>
              <br />
              <button type="submit" class="btn btn-dark">Submit</button>
          </div>
        </form>
      </CardText>
    </Card>
  );
}

export default Contact;
