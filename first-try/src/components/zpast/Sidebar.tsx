import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { NavData } from './NavData';
import Navmenu from './Navmenu';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: black;
`

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    display: flex;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100% ')}
`
const NavIcon = styled(Link)`
    display: flex;  
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`

const SidebarWrap = styled.div`
    
`

const Sidebar: React.FC<{}> = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavIcon to="#" onClick={showSideBar}>
                    <AiOutlineMenu></AiOutlineMenu>
                </NavIcon>
                {NavData.map((item) => {
                    return <Navmenu item={item}></Navmenu>
                }

                )}

            </Nav>

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#" onClick={showSideBar}>
                        <AiOutlineClose></AiOutlineClose>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>

            </SidebarNav>
        </IconContext.Provider>
    )
}

export default Sidebar;