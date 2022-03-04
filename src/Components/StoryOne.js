import React from 'react'
import { Row, Col, Container, Button} from 'react-bootstrap';
import '../Stories.css';
import getStories from '../Services/DataService';

function StoryOne() {
    console.log(getStories);
  return (
    <div>
        <Container fluid>
        <Row className='mt-5'>
        <Col className='mt-5'>
         <h2 className='text-center mt-5'>Story Line Goes Here</h2>
        </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content-center mt-5'>
            <h4 className='mt-4'>Choice text goes here</h4>
            </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content-center'>
            <h4>Choice text goes here</h4>
            </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content-center'>
            <h4>Choice text goes here</h4>
            </Col>
        </Row>

        <Row className='mt-Custom'>
        <Col className='d-flex justify-content-center mt-5'>
        <Button className='mt-5 ButtonStories' onClick={getStories}> Choice A</Button>
        </Col>
        </Row>

        <Row>
        <Col className='d-flex justify-content-center mt-3'>
        <Button className='ButtonStories'>Choice B</Button>
        </Col>
        </Row>

        <Row>
        <Col className='d-flex justify-content-center mt-3'>
        <Button className='ButtonStories'>Choice C</Button>
        </Col>
        </Row>

        </Container>

    </div>
  )
}

export default StoryOne