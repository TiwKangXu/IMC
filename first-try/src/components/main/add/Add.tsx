import React from 'react';
import styled from 'styled-components';
import { GrAddCircle } from "react-icons/gr";

const AddContainer = styled.div`
    background-color: beige;
    height: auto;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px;
`

const LogoContainer = styled.div`
    font-size: 40px;
`

const TextContainer = styled.div`
    font-size: 20px;
`

const Add: React.FC<{}> = () => {
    return (
        <AddContainer>
            <LogoContainer><GrAddCircle></GrAddCircle></LogoContainer>
            <TextContainer>Add Gadget</TextContainer>
        </AddContainer>
    )
}

export default Add;
