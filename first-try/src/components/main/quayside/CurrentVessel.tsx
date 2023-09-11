import React, { useState } from 'react';
import styled from 'styled-components';
import { BerthItem } from '../../../models/BerthItem';
import { Link } from 'react-router-dom';
import CurrentVesselProgressBar from './CurrentVesselProgressBar';

type CurrentVesselProps = {
    item: BerthItem;
}

const CurrentVesselContainer = styled.div`
    height: 40px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`

const VINContainer = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const CurrentVessel: React.FC<CurrentVesselProps> = ({ item }) => {

    return (
        <CurrentVesselContainer>
            <VINContainer>{item.currentBerthVIN}</VINContainer>
            <CurrentVesselProgressBar progress={item.progress}></CurrentVesselProgressBar>
        </CurrentVesselContainer>
    )
}


export default CurrentVessel;