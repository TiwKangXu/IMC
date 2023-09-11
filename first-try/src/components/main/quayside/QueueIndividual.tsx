import React, { useState } from 'react';
import styled from 'styled-components';
import { QueueVessel } from '../../../models/QueueVessel';

type QueueIndividualProps = {
    queueIndividual: QueueVessel;
}


const QueueIndividualContainer = styled.div`
    font-size: 18px;
    flex: 1;
`

const QueueIndividual: React.FC<QueueIndividualProps> = ({ queueIndividual }) => {

    return (
        <QueueIndividualContainer>
            {queueIndividual.VIN}
        </QueueIndividualContainer>

    )
}

export default QueueIndividual;