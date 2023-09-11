import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { KSidebarData } from './KSidebarData';
import KSubmenu from './KSubmenu';


const KSidebarNav = styled.div`
    width: 150px;
    height: 100%;
    background-color: black;
    display: flex;
`

const SidebarWrap = styled.div`
    
`

const KSidebar: React.FC<{}> = () => {

    return (
        <IconContext.Provider value={{ color: "#fff" }}>

            <KSidebarNav>
                <SidebarWrap>
                    {KSidebarData.map((item, index) => {
                        return <KSubmenu item={item} key={index} />
                    })}
                </SidebarWrap>

            </KSidebarNav>
        </IconContext.Provider>
    )
}

export default KSidebar;