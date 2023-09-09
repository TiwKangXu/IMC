import React, { useState } from 'react';
import styled from 'styled-components';

const Dash = styled.div`
    width: 250px;
    height: 100vh;
    background-color: pink;
    position: fixed;
    top: 0;
    display: flex;
    right: 0;
`

const KIncentive: React.FC<{}> = () => {

    return (
        <Dash>Incentive</Dash>
    )
}

export default KIncentive;