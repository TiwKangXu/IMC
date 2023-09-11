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
    background-color: brown;
    display: flex;
    margin-bottom: 10px;
`

const SideContainer = styled(Link)`
    height: auto;
    width: 40px;
    background-color: yellow;
    overflow: hidden; /* Prevent content from overflowing */
    display: flex;

    align-items: center; /* Center text vertically */
    justify-content: center; /* Align text to the right */
    text-decoration: none;
`

const SideText = styled.div`
    font-size: 30px;
    transform: rotate(-90deg);
    white-space: nowrap; /* Prevent text from wrapping */
`

const TextContainer = styled.div`
    flex: 1;
    flex-direction: column;
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