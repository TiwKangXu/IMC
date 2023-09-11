import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import { CompanyData } from './CompanyData';

const CompaniesContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
`

const Vessels: React.FC<{}> = () => {
    return (
        <CompaniesContainer>
            {CompanyData.map((item, index) => {
                return <CompanyInfo item={item} key={index} />
            })}
        </CompaniesContainer>
    )
}

export default Vessels;
