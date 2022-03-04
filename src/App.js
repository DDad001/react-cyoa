import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Container, Col} from 'react-bootstrap';
import {useNavigate, BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import StoriesPage from './Components/StoriesPage';
import HomePage from './Components/HomePage';
import StoryOne from './Components/StoryOne';
import StoryTwo from './Components/StoryTwo';
import StoryThree from './Components/StoryThree';
// import ReactAudioPlayer from 'react-audio-player';

function App() {
  
  return (
 <BrowserRouter>  
          <Routes>
          <Route path="/" element={<Navigate replace to="/HomePage" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/StoriesPage" element={<StoriesPage />} />
          <Route path="/CreateAccount" element={<StoriesPage />} />
          <Route path="/StoryOne" element={<StoryOne />} />
          <Route path="/StoryTwo" element={<StoryTwo />} />
          <Route path="/StoryThree" element={<StoryThree />} />
         </Routes>
     </BrowserRouter>
  );
}

export default App;
