import React, { useState } from 'react';
import styled from 'styled-components';
import Leaderboard from './leaderboard/Leaderboard';

const KIncentiveContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const KIncentive: React.FC<{}> = () => {
    return (
        <KIncentiveContainer>
            <Leaderboard></Leaderboard>
        </KIncentiveContainer>
    )
}

export default KIncentive;