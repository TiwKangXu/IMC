import React from 'react';
import styled from 'styled-components';
import VesselInfo from './VesselInfo';
import { VesselData } from './VesselData';

const VesselContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: gray;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
`

const Vessels: React.FC<{}> = () => {
    return (
        <VesselContainer>
            {VesselData.map((item, index) => {
                return <VesselInfo item={item} key={index} />
            })}
        </VesselContainer>
    )
}

export default Vessels;
