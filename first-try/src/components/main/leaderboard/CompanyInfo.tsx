import React, { useState } from 'react';
import styled from 'styled-components';
import { CompanyItem } from '../../../models/CompanyItem';
import { Link } from 'react-router-dom';

type RatingContainerProps = {
    rating: number; // Define the rating prop with the correct type
}


type CompanyProps = {
    item: CompanyItem;
}

const CompanyContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ececec;
    display: flex;
    margin-bottom: 10px;
    border-radius: 15px; 
    padding: 2px;
`
const LogoContainer = styled(Link)`
    height: 100px;
    width: 100px;
    background-color: #dedede;
    border-radius: 15px 0px 0px 15px; 
    color: #424242;
`

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px 0px 0px 15px;
`;

const TextContainer = styled.div`
    flex: 1;
    flex-direction: column;
    margin-left: 10px;
`

const CompanyName = styled.div`
    height: 20px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

const DetailContainer = styled.div`
    font-size: 18px;
`
const RatingContainer = styled.div<RatingContainerProps>`
    height: 100px;
    width: 100px;
    border-radius: 0px 15px 15px 0px; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 20px;
    font-weight: bold;
    background-color: ${({ rating }) => {
        if (rating < 3) {
            return 'red';
        } else if (rating < 4) {
            return 'yellow';
        } else {
            return 'green';
        }
    }};
`



const VesselInfo: React.FC<CompanyProps> = ({ item }) => {

    return (
        <CompanyContainer>
            <LogoContainer to={'#'}>
                <LogoImage src={item.logo} alt={item.companyName} />
            </LogoContainer>
            <TextContainer>
                <CompanyName> {`${item.companyName}`} </CompanyName>
                <DetailContainer>
                    {`ID: ${item.companyID}`} <br />
                    {`Vessel per Month: ${item.vesselAmount}`} <br />
                    {`Emission Contribution: ${item.emissionContribution}`}% <br />
                </DetailContainer>
            </TextContainer>
            <RatingContainer rating={item.rating}>
                {item.rating}
            </RatingContainer>
        </CompanyContainer>
    )
}

export default VesselInfo;