import React, { useState } from 'react';
import styled from 'styled-components';

const VesselContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

const VesselInfo: React.FC<{ vessel: String }> = ({ vessel }) => {

    return (
        <VesselContainer>{vessel}</VesselContainer>
    )
}

export default VesselInfo;