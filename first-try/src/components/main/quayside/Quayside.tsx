import React from 'react';
import styled from 'styled-components';
import Title from './QuaysideTitle';
import Vessels from './Berths';

const QuaysideContainer = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px;
`

const Quayside: React.FC<{}> = () => {
    return (
        <QuaysideContainer>
            <Title></Title>
            <Vessels></Vessels>
        </QuaysideContainer>
    )
}

export default Quayside;
