import React, { useState } from 'react';
import styled from 'styled-components';
import KUpcomingShips from './upcomingships/KUpcomingShips';
import Quayside from './quayside/Quayside';
import Emission from './emission/Emission';


const KDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide into 2 columns (adjust proportions as needed) */
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line when needed */
  justify-content: space-between; /* Space sections evenly */
  gap: 5px; /* Adjust the gap between sections */
  width: 100%;
  height: 100%;
`;

const Column1 = styled.div`
  grid-column: 1 / span 1; /* Span 1 column */
  padding: 10px;
  flex: 1;
`

const Column2 = styled.div`
  grid-column: 1 / span 1; /* Span 1 column */
  padding: 10px;
  flex: 1;
`

const QuaySection = styled.div`
  background-color: #eee;
  padding: 20px;
  flex: 1;
`;

const UpcomingSection = styled.div`
  background-color: #eee;
  padding: 20px;
  flex: 1;
`;

const BerthSection = styled.div`
  background-color: #eee;
  padding: 20px;
  flex: 1;
`;

const EmissionSection = styled.div`
  background-color: #eee;
  padding: 20px;
  flex: 1;
`;

const KDashboard: React.FC<{}> = () => {

  return (
    <KDashboardContainer>
      <Column1>
        <QuaySection>
          <Quayside></Quayside>
        </QuaySection>
        <BerthSection>
          <div>Berth</div>
        </BerthSection>
      </Column1>
      <Column2>
        <UpcomingSection>
          <KUpcomingShips></KUpcomingShips>
        </UpcomingSection>

        <EmissionSection>
          <Emission></Emission>
        </EmissionSection>
      </Column2>


    </KDashboardContainer>
  )
}

export default KDashboard;



