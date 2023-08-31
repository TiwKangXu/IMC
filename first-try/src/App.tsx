import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';


function App() {


  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/overview' element={<Overview />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
