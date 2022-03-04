import React from 'react'
import '../Stories.css';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import FireSong from '../Assets/FireSong.mp3';
import { useNavigate } from 'react-router-dom';
import gold from '../Assets/gold.jpg';


function StoriesPage() {
let navigate = useNavigate();
  return (
      <Container fluid>
          <Row>
         <div className='HeroGif'>
             <Row>
                 <Col>
                 <h1 className='d-flex justify-content-center mb-5'>Select a Story</h1>
                 <audio src={FireSong} controls loop autoPlay="true"/>
                 </Col>
             </Row>
             <Row className='mt-5'>
                 <Col lg={4} className='d-flex justify-content-center'>
                   {/* <Button className='ButtonStories'>The Aztec Gold</Button> */}
                   <div className='StoryOneHero' onClick={() => navigate("/StoryOne")}>   
                    <h3 className='text-center'>The Aztec gold</h3>
                   </div>
                 </Col>

                 <Col lg={4} className='d-flex justify-content-center'>
                 {/* <Button className='ButtonStories'>The Case Of The Stinky Boot</Button> */}
                 <div className='StoryTwoHero' onClick={() => navigate("/StoryTwo")}>
                    <h3 className='text-center h3Custom'>The Case Of The Stinky Boot</h3>
                 </div>
                 </Col>

                 <Col lg={4} className='d-flex justify-content-center'>
                 {/* <Button className='ButtonStories'>Tom And The Flat Tire</Button> */}
                 <div className='StoryThreeHero' onClick={() => navigate("/StoryThree")}>
                   <h3 className='text-center h3Custom'>Tom And The Flat Tire</h3>
                </div>
                 </Col>
             </Row>
         </div>
          </Row>
      </Container>
  )
}

export default StoriesPage