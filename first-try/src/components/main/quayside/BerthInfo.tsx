import React, { useState } from 'react';
import styled from 'styled-components';
import { BerthItem } from '../../../models/BerthItem';
import { Link } from 'react-router-dom';
import CurrentVessel from './CurrentVessel';
import Queue from './Queue';

type BerthProps = {
    item: BerthItem;
}

const BerthContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #ececec;
    display: flex;
    margin-bottom: 10px;
    // border: 2px solid #000; /* Border width and color */
    border-radius: 15px; 
    padding: 2px;

`

const SideContainer = styled(Link)`
    height: auto;
    width: 40px;
    background-color: #dedede;
    display: flex;
    align-items: center; /* Center text vertically */
    justify-content: center; /* Align text to the right */
    text-decoration: none;
    border-radius: 15px 0px 0px 15px; 
    color: #424242;
`

const SideText = styled.div`
    font-size: 30px;
    transform: rotate(-90deg);
    white-space: nowrap; /* Prevent text from wrapping */
`

const TextContainer = styled.div`
    flex: 1;
    flex-direction: column;
    margin-left: 10px;

`

const BerthInfo: React.FC<BerthProps> = ({ item }) => {

    return (
        <BerthContainer>
            <SideContainer to={'#'}>
                <SideText>
                    {`Berth ${item.berthID}`}
                </SideText>
            </SideContainer>
            <TextContainer>
                <CurrentVessel item={item}></CurrentVessel>
                <Queue queue={item.queueingBerth}></Queue>
            </TextContainer>
        </BerthContainer>
    )
}

export default BerthInfo;