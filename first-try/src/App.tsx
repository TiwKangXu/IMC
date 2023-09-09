import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KNavBar from './components/navbar/KNavBar';
import KSidebar from './components/sidebar/KSidebar';
import KUpcomingShips from './components/main/upcomingships/KUpcomingShips';
import KDashboard from './components/main/KDashboard';
import KIncentive from './components/main/KIncentive';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure the container takes up the full viewport height */
`;

const MainContainer = styled.div`
  flex: 1; /* Takes up remaining vertical space */
  display: flex; /* Nested flex container for sidebar and main content */
`;


function App() {

  return (
    <Router >
      <AppContainer>
        <KNavBar></KNavBar>
        <MainContainer>
          <KSidebar></KSidebar>
          <Routes>
            <Route path="/dashboard" Component={KDashboard}></Route>
            <Route path="/incentive" Component={KIncentive}></Route>
          </Routes>
        </MainContainer>
      </AppContainer>
    </Router>



  );
}

export default App;

