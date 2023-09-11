import React, { useState } from 'react';
import styled from 'styled-components';
import KUpcomingShips from './upcomingships/KUpcomingShips';
import Quayside from './quayside/Quayside';


const KDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr; /* Divide into 2 columns (adjust proportions as needed) */
  // grid-template-columns: auto; /* Divide into 2 columns (adjust proportions as needed) */

  // grid-template-rows: 5fr 3fr; /* Divide into 2 rows (adjust proportions as needed) */
  grid-template-rows: auto; /* Divide into 2 rows (adjust proportions as needed) */

  gap: 20px; /* Adjust the gap between grid items */
  width: 100%;
  height: 100%;
`;

const QuaySection = styled.div`
  grid-column: 1 / span 1; /* Span 1 column */
  grid-row: 1 / span 1; /* Span 1 row */
  background-color: #eee;
  padding: 20px;
`;

const UpcomingSection = styled.div`
  grid-column: 2 / span 1; /* Span 1 column */
  grid-row: 1 / span 1; /* Span 1 row */
  background-color: #eee;
  padding: 20px;
`;

const BerthSection = styled.div`
  grid-column: 1 / span 1; /* Span 1 column */
  grid-row: 2 / span 1; /* Span 1 row */
  background-color: #eee;
  padding: 20px;
`;

const EmissionSection = styled.div`
  grid-column: 2 / span 1; /* Span 1 column */
  grid-row: 2 / span 1; /* Span 1 row */
  background-color: #eee;
  padding: 20px;
`;

const KDashboard: React.FC<{}> = () => {

  return (
    <KDashboardContainer>
      <QuaySection>
        <Quayside></Quayside>
      </QuaySection>
      <UpcomingSection>
        <KUpcomingShips></KUpcomingShips>
      </UpcomingSection>
      <BerthSection>
        <div>Berth</div>
      </BerthSection>
      <EmissionSection>
        <div>Emission</div>
      </EmissionSection>
    </KDashboardContainer>
  )
}

export default KDashboard;



