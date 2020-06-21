import React from "react";
import "./ContactStyle.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Contact extends React.Component {
  render() {
    return (
      <div className="main-div">
         <div class="naslov">
            <p id="prvi" >
                <b>
                Hello
                </b>
              </p>
              <br></br>
              <p id="drugi">
                  Let's get in touch!
              </p>
          </div>
        <Row>
         <Card style={{ width: '35rem' }} id="kontakt">
            <Card.Body>
              <Card.Title><h3>Contact information </h3></Card.Title>
              <Card.Text>  
                <p> Address: Patriotske lige 40, Sarajevo  </p>
               <p> E-mail: sejla.pljakic@gmail.com </p>
               <p> Number: +387603505352   </p>    
               
                </Card.Text> 
            </Card.Body>
          </Card>
      </Row>
      </div>
    );
  }
}

export default Contact;