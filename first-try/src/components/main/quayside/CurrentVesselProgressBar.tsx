import React, { useState } from 'react';
import styled from 'styled-components';
import { BerthItem } from '../../../models/BerthItem';
import { Link } from 'react-router-dom';

type CurrentVesselProgressBarProps = {
    progress: number;
}

interface ProgressFillerProps {
    progress: number;
}

const ProgressBarContainer = styled.div`
    width: 90%;
    height: 20px;
    background-color: lightgray;
    border-radius: 5px;
    margin-top: 5px;
    // display: flex;
    // flex-direction: row;
`
const ProgressFiller = styled.div<ProgressFillerProps>`
    height: 100%;
    width: ${(props) => props.progress || '0'}%; /* Adjust progress value */
    background-color: green;
    border-radius: 5px;
    display: flex;
    justify-content: center;
`

const ProgressPercentageContainer = styled.div`
    width: ;
    display: flex;
    align-items: center;
    font-size: 15px;
`

const CurrentVesselProgressBar: React.FC<CurrentVesselProgressBarProps> = ({ progress }) => {

    return (
        <ProgressBarContainer>
            <ProgressFiller progress={progress}>
                <ProgressPercentageContainer>{progress} %</ProgressPercentageContainer>
            </ProgressFiller>

        </ProgressBarContainer>
    )
}

export default CurrentVesselProgressBar;