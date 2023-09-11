import React, { useState } from 'react';
import styled from 'styled-components';

const EmissionTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: ;
    font-size: 24px;
    margin-bottom: 10px;

`

const EmissionTitle: React.FC<{}> = () => {

    return (
        <EmissionTitleContainer>Emission</EmissionTitleContainer>
    )
}

export default EmissionTitle;