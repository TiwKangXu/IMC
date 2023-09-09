import { FC } from "react";
import { SidebarItem } from "../../models/SidebarItem";
import styled from 'styled-components';
import { Link } from 'react-router-dom';



type SidebarLinkProps = {
    item: SidebarItem;
}

const SidebarLink = styled(Link)`
    display: flex;
    // justify-content: space-between;
    align-items: center;
    height: 1.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: #585858
    }
`
const SidebarLabel = styled.div`
    margin-left: 3rem;
`

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    return (
        <SidebarLink to={item.path}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarLink>
    )
}

export default Submenu;