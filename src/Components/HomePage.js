import React, { useState } from 'react';
import { Button, Row, Container, Col} from 'react-bootstrap';
import {useNavigate, BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Login from './Login';
import '../App.css';


function HomePage() {
    let navigate = useNavigate();
    const [hide, setHide] = useState(false)
      
    const handleHide = () => {
      setHide(true)
      navigate('/StoriesPage')
    }
    return (
        <div>
   {hide ?
    null
    :
    <div>
        <>
        <Container fluid>
            <Row>
                 <div className='HeroImage'>
                <Row>
                <Col>
                <h1 className='TextStyle mtCustom'><u>Instuctions For Game</u></h1>
                <Row>
                    <Col>
                    <p className='TextStyle mb-5 mLeft'>You will have a selection of<br/> stories to choose from. Your 
                    <br/> task of the game is to solve <br/> the stories by choosing a path <br/> that seems fit to you.</p>
                    <br/>
                    <p className='TextStyle mt-5 mLeft'>Good Luck and Have Fun!</p>
                    </Col>
                </Row>
                </Col>
                
                <Col>
                <h1 className='MainTitle'>Welcome To Choose Your Own Adventure</h1>
                    <Button className='startGame ButtonDesign' onClick={handleHide}>Start Game</Button>
                </Col>
                </Row>
                 </div>
               </Row>
      </Container>  
      </>
      </div>
   }
</div>

  );
}

export default HomePage;

//   const [hide, setHide] = useState(false)
//   // const [play, setPlay] = useState(false)

//   const handleHide = () => {
//     setHide(true)
//   }
//   // const handlePlay = () => {
//   //   <ReactAudioPlayer
//   //   src={song}
//   //   autoPlay
//   //   controls/>
//   // }

//   return (
//  <BrowserRouter>
//     <>
//     {hide ?
//       <Options/>
//     :
//     <>
//        <div>
//       <Container fluid>
//         <div className='d-flex justify-content-end'>
//        <audio src={song} controls autoPlay="true" />
//         </div>
//         <div className='marginTop'>
//           <Row>
//             <Col lg={12} className = "d-flex justify-content-center">
//              <h1 className='MainTitle mt-5'>Welcome To Choose Your Own Adventure</h1>    
//             </Col>
//           </Row>
//         <Row>
//           <Col lg= {12} className = "d-flex justify-content-center">
//           </Col>
//         </Row>
//            <Row>
//              <Col lg={12} className = "d-flex justify-content-center">
//              </Col>
//            </Row>
//            </div>
//        </Container>
//        </div>   
// {/* 
//       <Link to = "header"><button>Header</button></Link>
//       <Link to = "/"><button>Home</button></Link> */}
//       </>
//     }
//   </>


        // <Routes>
        //   <Route path="/" element={<Navigate replace to="/HomePage" />} />
        //   <Route path="storiespage" element={<StoriesPage/>} />
        //   <Route path="/login" element={<Login />} />
        //   <Route path="/HomePage" element={<HomePage />} />
        // </Routes>
    // </BrowserRouter>