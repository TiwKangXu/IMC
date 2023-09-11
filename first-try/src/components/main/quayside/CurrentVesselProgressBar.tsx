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
`
const ProgressFiller = styled.div<ProgressFillerProps>`
    height: 100%;
    width: ${(props) => props.progress || '0'}%; /* Adjust progress value */
    background-color: green;
    border-radius: 5px;
`

const CurrentVesselProgressBar: React.FC<CurrentVesselProgressBarProps> = ({ progress }) => {

    return (
        <ProgressBarContainer>
            <ProgressFiller progress={progress}></ProgressFiller>
        </ProgressBarContainer>
    )
}

export default CurrentVesselProgressBar;