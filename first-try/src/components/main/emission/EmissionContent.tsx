import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import { xAxis } from './LineChartLabel';

const EmissionsContainer = styled.div`
    height: auto;
    width: 100%;
`

const EmissionContentContainer = styled.div`
    width: 100%;    
    height: 300px;
    background-color: white;
    margin-bottom: 30px;
    flex-direction: column;


`

const GasType = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
`

const EmissionContent: React.FC<{}> = () => {
    const CO2past = [12, 19, 8, 8, 10, 13, 20, 22, 21, 18, 24, 17];
    const CO2curr = [10, 16, 8, 6, 11, 10, 18, 21,];
    const CH4past = [11, 15, 8, 9, 10, 9, 13, 12, 13, 8, 9, 10];
    const CH4curr = [10, 16, 8, 6, 11, 10, 15, 13,];
    const labels = xAxis;
    return (
        <EmissionsContainer>
            <EmissionContentContainer>
                <GasType>CO2</GasType>
                <LineChart data1={CO2past} data2={CO2curr} labels={labels}></LineChart>

            </EmissionContentContainer>
            <EmissionContentContainer>
                <GasType>CH4</GasType>
                <LineChart data1={CH4past} data2={CH4curr} labels={labels}></LineChart>
            </EmissionContentContainer>
        </EmissionsContainer>
    )
}

export default EmissionContent;
