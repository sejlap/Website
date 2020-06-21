import React from "react";
import './Stil.css';
import Img from './slika.jpg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
class Home extends React.Component {
  render() {
    return (
      <div className="main-div">
         <img src= {Img} id="picture" alt="pic" />
            <Row id="red1">
              <h2> ŠEJLA PLJAKIĆ </h2> <br></br>
              </Row>
            <Row id="red2">
              <h3>Bachelor of Electrical Engineering </h3> <br></br>
            </Row>
            <Row id="red3">
              <h3>  Software engineer </h3>
            </Row>
           <Card style={{ width: '35rem' }}>
              <Card.Body>
                <Card.Title> <b>About me </b></Card.Title>
                <Card.Text>
                <b> ▪ Inspiring, a mission-driven enthusiast </b>  who can help you to create or adapt customized applications with reusable and maintainable components for clients or other organizations. <br></br>
                <b> ▪ A proactive contributor </b> who listens to clients needs and works with engineering and programming skills to analyze, define, design and implement complex, distributed software systems to meet those needs.    <br></br>
                <b> ▪ A passionate innovator and problem solver </b> who helps others to be unique and to use their full potential and to get customer trust.
                </Card.Text>
              </Card.Body>
            </Card>
      </div>
    );
  }
}

export default Home;