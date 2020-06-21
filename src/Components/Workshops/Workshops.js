import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Workshops extends React.Component {
  render() {
    return (
      <div className="main-div">
        <Row ><h2> Workshops & meetups  </h2></Row>
        <Row id="first"> 
        <Card style={{ width: '18rem' }} >
          <Card.Body>
            <Card.Title> <h4><b> Womentech global conference  </b> </h4></Card.Title>
            <Button href="https://www.womentech.net/women-tech-conference" variant="primary"className="dugme" >Check it</Button>
          </Card.Body>
       </Card>
      <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title><h4><b>How to build a startup on AWS </b> </h4> </Card.Title>
              <Button href="https://www.meetup.com/AWS-User-Group-Bosnia/events/269454161/" variant="primary" className="dugme">Check it</Button>
            </Card.Body>
        </Card>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title><h4><b> Future mentoring Webinar Series</b></h4>   </Card.Title>
        <Button href="https://www.bhfuturesfoundation.org/" variant="primary" className="dugme" >Check it</Button>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4><b>BH engineering weeks </b> </h4> </Card.Title>
          <Button href="https://sarajevo.bhing.ba/program/" variant="primary" className="dugme"  >Check it</Button>
        </Card.Body>
    </Card>
  </Row>

<Row id="second"> 
  <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title> <h4><b>EESTEC Fundraising workshop JobFair19 </b> </h4></Card.Title>
        <Button href="http://www.eestec-sa.ba/" variant="primary" className="dugme">Check it</Button>
      </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title><h4><b>SEE 8 Ripe meetup </b> </h4> </Card.Title>
      <Button href="https://www.ripe.net/participate/meetings/regional-meetings/see/see-8" variant="primary" className="dugme">Check it</Button>
      </Card.Body>
  </Card>
          <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title><h4><b>Industry Work Integrated Learning - Disrupting Traditional Education </b> </h4></Card.Title>
         
          <Button href="https://academy387.com/events/diaspora-talks-industry-work-integrated-learning-disrupting-traditional-education?fbclid=IwAR0YlOYrdYX3CTK92rACA4oXKmi3f-pfPRgR4ClZqlW37b-UPgOuVZpC-FE" variant="primary"className="dugme" >Check it</Button> 
        </Card.Body>
      </Card>
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title> <h4><b>„The code awakens“ workshop </b> </h4> </Card.Title>
              <Button href="http://eestec-sa.ba/posts/50" variant="primary" className="dugme" >Check it</Button> 
            </Card.Body>
          </Card>
    
    </Row>

<Row id="third"> 
    <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title> <h4> <b>Career speed dating workshop </b> </h4>  </Card.Title>
          <Button href="http://www.jobfair.ba/novost/105" variant="primary" className="dugme" >Check it</Button> 
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title> <h4><b>Open space technology workshop </b> </h4> </Card.Title>
        <Button href="http://www.jobfair.ba/novost/106" variant="primary" className="dugme">Check it </Button> 
          </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h4><b>CV/LinkedIn workshop </b> </h4>  </Card.Title>
              <Button href="http://www.jobfair.ba/novost/102" variant="primary" className="dugme"> Check it</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> <h4><b>Business communication workshop </b> </h4> </Card.Title>
          <Button href="https://www.hocu.ba/index.php/hocu.priliku/jobfair-2018-radionica-poslovne-komunikacije" variant="primary" className="dugme" >Check it</Button> 
            </Card.Body>
          </Card>
      </Row>

  <Row ><h2> Certifications </h2></Row>
    <Row id="new"> 
      <Card style={{ width: '18rem' }} >
        <Card.Body>
          <Card.Title><h4><b> Womentech global conference participation  </b> </h4> </Card.Title>
          <Button href="https://www.womentech.net/certificate-participation/Sejla/Pljakic" variant="primary" className="dugme" >Check it</Button>
        </Card.Body>
      </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> <h4><b> Certificate for volunteering as a FR and HR team member in JobFair19  </b> </h4>  </Card.Title>
        <Button href="https://github.com/sejlap/Certifications-other-projects/blob/master/JobFair%20certifikat.jpg" variant="primary" className="dugme" >Check it</Button>
      </Card.Body>
    </Card>
    
     <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Title> <h4><b> The code awakens participation certificate </b> </h4> </Card.Title>
            <Button href="https://github.com/sejlap/Certifications-other-projects/blob/master/Certifikat.jpg" variant="primary" className="dugme" >Check it</Button>
        </Card.Body>
      </Card>
    </Row>
      </div>
    );
  }
}
export default Workshops;