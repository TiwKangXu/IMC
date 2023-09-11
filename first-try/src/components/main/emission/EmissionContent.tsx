import React from 'react';
import styled from 'styled-components';

const EmissionContentContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: gray;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
`

const EmissionContent: React.FC<{}> = () => {
    return (
        <EmissionContentContainer>
        </EmissionContentContainer>
    )
}

export default EmissionContent;
