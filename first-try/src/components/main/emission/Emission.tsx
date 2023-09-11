import React from 'react';
import styled from 'styled-components';
import EmissionTitle from './EmissionTitle';
import EmissionContent from './EmissionContent';

const EmissionContainer = styled.div`
    background-color: beige;
    height: auto;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px;
`

const Emission: React.FC<{}> = () => {
    return (
        <EmissionContainer>
            <EmissionTitle></EmissionTitle>
            <EmissionContent></EmissionContent>
        </EmissionContainer>
    )
}

export default Emission;
