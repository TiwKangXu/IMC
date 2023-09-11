import React from 'react';
import styled from 'styled-components';
import Companies from './Companies';


const LeaderboardContainer = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column; /* Arrange children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px;
`

const LeaderboardTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const Leaderboard: React.FC<{}> = () => {
    return (
        <LeaderboardContainer>
            <LeaderboardTitle>Leaderboard</LeaderboardTitle>
            <Companies></Companies>
        </LeaderboardContainer>
    )
}

export default Leaderboard;
