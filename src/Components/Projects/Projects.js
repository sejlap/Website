import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './ProjectStil.css';

class Projects extends React.Component {
  render() {
    return (
      <div className="main-div">
        <Row id="first"> 
          <Card style={{ width: '18rem' }} className="Kartica">
            <Card.Body>
              <Card.Title> <h4><b> <u> Internship Infobip Virtual Classroom </u></b> </h4> </Card.Title>
              <Card.Text>
              Learned about the latest technologies in software engineering, presales engineering and core operations.
              Created chatbot, own solutions and got badges for participating the classes.
              </Card.Text>
          <Button href="https://github.com/sejlap/Infobip-Virtual-Classroom" variant="primary" className="dugme">Check it</Button> 
            
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="Kartica" >
            <Card.Body>
              <Card.Title> <h4><b> <u>Startup „Better life“  </u></b> </h4> </Card.Title>
              <Card.Text>
              Analyzing persons needs to be more successful in life through modules health, career, school, finance, be happy, etc. Mobile application in React Native + Node.js, investment process using Blockchain technology. 
              </Card.Text>
              <Button href="mailto: sejla.pljakic@gmail.com" variant="primary" className="dugme">Check it</Button>
            </Card.Body>
          </Card>
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b> <u>Bachelor thesis - Machine learning project </u> </b> </h4> </Card.Title>
          <Card.Text>
          Analyzed a dataset of travel reviews and deciding which place is the best in “East Asia” according to reviews using machine learning techniques, MLDB and Python. 
          </Card.Text>
          <Button href="https://github.com/sejlap/Bachelor-thesis" variant="primary" className="dugme">Check it</Button> 
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title> <h4><b> <u>Web application “Reservation process” </u> </b> </h4> </Card.Title>
        <Card.Text>
        Worked with HTML, CSS, JavaScript to create a frontend of this application and worked with Node.js, Express.js, Ajax for backend and PhpMyAdmin database for creating tables. 
        </Card.Text>
        <Button href="https://github.com/sejlap/Web-technologies" variant="primary" className="dugme">Check it</Button> 
          </Card.Body>
          </Card>
  </Row>

<Row id="second"> 
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title> <h4><b> <u>Virtual reality application “Colosseum” </u> </b> </h4> </Card.Title>
              <Card.Text>
              Designed an antique Colosseum using Blender and worked with Unity to represent it like a virtual reality application.
              </Card.Text>
              <Button href="https://github.com/sejlap/Virtual-reality-application-Colosseum-" variant="primary" className="dugme">Check it</Button> 
            </Card.Body>
          </Card>

   
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b> <u>Matlab programs </u> </b> </h4> </Card.Title>
          <Card.Text>
          Analyzed problems and resolved them using Matlab on the different courses „Artificial intelligence“ and „Computer modelling and simulations“.
          </Card.Text>
          <Button href="https://github.com/sejlap/Matlab-programs" variant="primary"  className="dugme">Check it</Button> 
        </Card.Body>
      </Card>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title> <h4><b> <u>Webpage „ETFMedia“ using WordPress </u> </b> </h4>  </Card.Title>
        <Card.Text>
        During the course „Business web systems“ we developed a webpage ETFMedia for a marketing agency using WordPress.
        </Card.Text>
        <Button href="http://www.ajla.ba/tim4" variant="primary" className="dugme">Check it</Button>
          </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title> <h4><b> <u>Information system „Rent a car agency“ </u> </b> </h4></Card.Title>
              <Card.Text>
              Experience as a leader of a team where I worked with my team on different tasks and created the information system "Rent a car agency".
              </Card.Text>
              <Button href="https://github.com/sejlap/Information-system-Rent-a-car-agency-" variant="primary" className="dugme">Check it</Button>
            </Card.Body>
          </Card>
    </Row>

<Row id="third"> 
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b> <u>Information system for „Red Cross“  </u> </b> </h4></Card.Title>
          <Card.Text>
          Created a module Mines with my team as the information system for “Red Cross”. We analyzed
everything about mines competitions and all requirements which they need in a system. 
          </Card.Text>
          <Button href="https://github.com/sejlap/Information-system-for-Red-Cross-" variant="primary" className="dugme">Check it</Button>
        </Card.Body>
      </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title><h4><b> <u>Application „Online dashboard for professors“ </u> </b> </h4> </Card.Title>
        <Card.Text>
        Developed an online dashboard for professors with my team using React.js, and Node.js. The professors together with assistants can make a schedule about students.
        </Card.Text>
        <Button href="https://github.com/si-2019/SI-FRONTEND" variant="primary"  id="red">Check code</Button>
        <Button href="http://si2019frontend.herokuapp.com/Fox" variant="primary" >Check app</Button>
          </Card.Body>
          </Card>
    
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title> <h4><b> <u>Application Auction </u> </b> </h4> </Card.Title>
              <Card.Text>
              I was at the position of a full-stack developer at an internship in AtlantBH, where I learned new technologies as  Ember.js, Spring Boot and PostgreSQL all of these skills were incorporated in the application Auction.  
              </Card.Text>
              <Button href="https://github.com/sejlap/AtlantBHInternship" variant="primary" className="dugme">Check it</Button>
            </Card.Body>
          </Card>
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b> <u>Project “Calculator” using Matlab, MplabX and Microchip16F1939 </u> </b></h4></Card.Title>
          <Card.Text>
          Created a calculator with my team member using Microchip16F1939, MplabX environment with C programming language and serial communication.
          </Card.Text>
          <Button href="https://github.com/sejlap/Matlab-MplabX-and-Microchip16F1939" variant="primary" className="dugme" >Check it</Button>
        </Card.Body>
      </Card>
      </Row>
<Row id="fourth"> 
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title><h4><b> <u>C and C++ programs, data structures and algorithms </u> </b> </h4>  </Card.Title>
        <Card.Text>
        Learned object-oriented principles and programming logic using C and C++  languages and the advanced programming techniques trough subject „Data structures and algorithms”.
        </Card.Text>
      <Button href=" https://github.com/sejlap/Algorithms-and-data-structures" variant="primary" className="dugme">Check it</Button>
          </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title><h4><b> <u>Application “Refugees welcome" </u> </b> </h4></Card.Title>
              <Card.Text>
              Designed an application for refugees with my team members where refugees have everything from accommodation, health care, food, education, ability to go outside of the country with just with one-click.
              </Card.Text>
              <Button href="https://github.com/sejlap/RefugeesWelcome" variant="primary" className="dugme">Check it</Button>
            </Card.Body>
          </Card>
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b> <u>Betting house using MySql database </u> </b> </h4></Card.Title>
          <Card.Text>
          Created a database for Betting house using Mysql and all knowledge that we learned at the subject “Database fundamentals”. Worked with triggers, procedures and views and all of these things are incorporated into queries. 
          </Card.Text>
          <Button href="https://github.com/sejlap/Betting-house" variant="primary" className="dugme">Check it</Button>
        </Card.Body>
      </Card>
</Row>
      </div>
    );
  }
}

export default Projects;