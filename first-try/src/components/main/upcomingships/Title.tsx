import React, { useState } from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 100%;
    height: 40px;
    // background-color: purple;
    display: flex;
    align-items: center;
    justify-content: ;
    font-size: 24px;
    margin-bottom: 10px;

`

const Title: React.FC<{}> = () => {

    return (
        <TitleContainer>Upcoming Ships</TitleContainer>
    )
}

export default Title;