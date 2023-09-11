import React, { useState } from 'react';
import styled from 'styled-components';
import { VesselItem } from '../../../models/VesselItem';
import { Link } from 'react-router-dom';

type VesselsProps = {
    item: VesselItem;
}

const VesselContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ececec;
    display: flex;
    margin-bottom: 10px;
    // border: 2px solid #000; /* Border width and color */
    border-radius: 15px; 
    padding: 2px;
`

const LogoContainer = styled(Link)`
    height: 100px;
    width: 100px;
    font-size: 100px;
    background-color: #dedede;
    border-radius: 15px 0px 0px 15px; 

    color: #424242;
`

const TextContainer = styled.div`
    flex: 1;
    flex-direction: column;
    margin-left: 10px;
`

const VINContainer = styled.div`
    height: 20px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

const DetailContainer = styled.div`
    font-size: 18px;
`

const VesselInfo: React.FC<VesselsProps> = ({ item }) => {

    return (
        <VesselContainer>
            <LogoContainer to={'#'}>{item.icon}</LogoContainer>
            <TextContainer>
                <VINContainer> {`${item.VIN}`} </VINContainer>
                <DetailContainer>
                    {`Type: ${item.type}`} <br />
                    {`ETA: ${item.ETA}`} <br />
                    {`Berth: ${item.berth}`} <br />
                </DetailContainer>
            </TextContainer>
        </VesselContainer>
    )
}

export default VesselInfo;