import React, { useState } from 'react';
import styled from 'styled-components';
import { BerthItem } from '../../../models/BerthItem';
import { Link } from 'react-router-dom';

type BerthProps = {
    item: BerthItem;
}

const BerthContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: brown;
    display: flex;
    margin-bottom: 10px;
`

const SideContainer = styled(Link)`
    height: 100px;
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

const BerthIDContainer = styled.div`
    height: 20px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;

`

const DetailContainer = styled.div`
    font-size: 18px;
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
                <BerthIDContainer> {`${item.currentBerthIMO}`} </BerthIDContainer>
                <DetailContainer>
                    {`${item.queueingBerth}`}
                </DetailContainer>
            </TextContainer>
        </BerthContainer>
    )
}

export default BerthInfo;