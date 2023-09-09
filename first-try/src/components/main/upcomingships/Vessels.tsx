import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import VesselInfo from './VesselInfo';

const VesselContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: gray;
    justify-content: center;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
`

const Vessels: React.FC<{}> = () => {
    return (
        <VesselContainer>
            <VesselInfo vessel={'Vessel 1'}></VesselInfo>
            <VesselInfo vessel={'Vessel 2'}></VesselInfo>
            <VesselInfo vessel={'Vessel 3'}></VesselInfo>
            <VesselInfo vessel={'Vessel 40404'}></VesselInfo>
            <VesselInfo vessel={'Vessel 5'}></VesselInfo>
        </VesselContainer>
    )
}

export default Vessels;
