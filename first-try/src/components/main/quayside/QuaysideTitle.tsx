import React, { useState } from 'react';
import styled from 'styled-components';

const QuaysideTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    // background-color: purple;
    display: flex;
    align-items: center;
    justify-content: ;
    font-size: 24px;
    margin-bottom: 10px;

`

const QuaysideTitle: React.FC<{}> = () => {

    return (
        <QuaysideTitleContainer>Quayside Operation</QuaysideTitleContainer>
    )
}

export default QuaysideTitle;