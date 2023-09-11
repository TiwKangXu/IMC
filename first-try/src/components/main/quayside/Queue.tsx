import React, { useState } from 'react';
import styled from 'styled-components';
import QueueIndividual from './QueueIndividual';
import { QueueVessel } from '../../../models/QueueVessel';

type QueueProps = {
    queue: QueueVessel[];
}


const QueueContainer = styled.div`
    font-size: 18px;
    flex: 1;
`

const QueueTitle = styled.div`
    font-weight: bold;

`

const Queue: React.FC<QueueProps> = ({ queue }) => {

    return (
        <QueueContainer>
            <QueueTitle>Queue</QueueTitle>
            {queue.map((item, index) => {
                return <QueueIndividual queueIndividual={item} key={index} />
            })}
        </QueueContainer>

    )
}

export default Queue;