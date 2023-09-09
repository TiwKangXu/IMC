import { FC } from 'react';
import styled from 'styled-components'
import { NavItem } from '../../models/NavItem';
import { Link } from 'react-router-dom';

type NavbarLinkProps = {
    item: NavItem;
}

const NavbarLabel = styled(Link)`
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #585858
    }
`

const Navmenu: FC<NavbarLinkProps> = ({ item }) => {
    return (
        <NavbarLabel to={item.path}>
            {item.icon}
        </NavbarLabel>
    )
}

export default Navmenu;