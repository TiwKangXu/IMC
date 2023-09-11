import React from 'react';
import styled from 'styled-components';
import VesselInfo from './BerthInfo';
import { VesselData } from './BerthData';

const BerthsContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: gray;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
`

const Berths: React.FC<{}> = () => {
    return (
        <BerthsContainer>
            {VesselData.map((item, index) => {
                return <VesselInfo item={item} key={index} />
            })}
        </BerthsContainer>
    )
}

export default Berths;
