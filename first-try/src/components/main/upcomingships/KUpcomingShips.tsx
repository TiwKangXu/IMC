import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import VesselInfo from './VesselInfo';
import Vessels from './Vessels';

const UpcomingContainer = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px;
`

const KUpcomingShips: React.FC<{}> = () => {
    return (
        <UpcomingContainer>
            <Title></Title>
            <Vessels></Vessels>
        </UpcomingContainer>
    )
}

export default KUpcomingShips;
