import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import LpNav from '../components/LpNav'
import Footer from '../components/Footer'
import "../styles/Contact.css";
import IntroImg from "../assets/intro-bg.jpg";
import Img1 from "../assets/team-1.jpg";
import Img2 from "../assets/team-2.jpg";
import Img3 from "../assets/team-3.jpg";
import Img4 from "../assets/team-4.jpg";
import Img5 from "../assets/team-5.jpg";


const Contact = () => {
  return (
    <div>
      <LpNav />
      <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="contact">
          <h1>Contact Me</h1>
            <div className='bg.primary col-lg-12 d-flex justify-content-center'>
              <Row className='Col-1 p-2'>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Img1} width="90" height="180" alt=" " />
                      <Card.Body>
                        <Card.Title className='text-secondary text-uppercase'>Burhan Wicaksono</Card.Title>
                        <Card.Text className='text-secondary'>
                          NIM 2110058
                        </Card.Text>
                        <Button variant="primary" href='https://www.instagram.com/'>Contact Me</Button>
                      </Card.Body>
                    </Card>
                  </Col>
              </Row>
              <Row className='Col-3 p-2'>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Img2} width="90" height="180" alt=" " />
                      <Card.Body>
                        <Card.Title className='text-secondary text-uppercase'>Ihsan Setiyadi</Card.Title>
                        <Card.Text className='text-secondary'>
                          NIM 2110024
                        </Card.Text>
                        <Button variant="primary" href='https://www.instagram.com/'>Contact Me</Button>
                      </Card.Body>
                    </Card>
                  </Col>
              </Row>
              <Row className='Col-3 p-2'>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Img5} width="90" height="180" alt=" " />
                      <Card.Body>
                        <Card.Title className='text-secondary text-uppercase'>Humaidi Fikri</Card.Title>
                        <Card.Text className='text-secondary'>
                          NIM 2110220
                        </Card.Text>
                        <Button variant="primary" href='https://www.instagram.com/'>Contact Me</Button>
                      </Card.Body>
                    </Card>
                  </Col>
              </Row>
              <Row className='Col-3 p-2'>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Img4} width="90" height="180" alt=" " />
                      <Card.Body>
                        <Card.Title className='text-secondary text-uppercase'>Muftia Ryskina</Card.Title>
                        <Card.Text className='text-secondary'>
                          NIM 2110005
                        </Card.Text>
                        <Button variant="primary" href='https://www.instagram.com/'>Contact Me</Button>
                      </Card.Body>
                    </Card>
                  </Col>
              </Row>
              <Row className='Col-3 p-2'>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={Img3} width="90" height="180" alt=" " />
                      <Card.Body>
                        <Card.Title className='text-secondary text-uppercase'>Anita Meliyanti</Card.Title>
                        <Card.Text className='text-secondary'>
                          NIM 2110018
                        </Card.Text>
                        <Button variant="primary" href='https://www.instagram.com/'>Contact Me</Button>
                      </Card.Body>
                    </Card>
                  </Col>
              </Row>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact