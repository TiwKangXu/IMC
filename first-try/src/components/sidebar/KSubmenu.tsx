import { FC } from "react";
import { KSidebarItem } from "../../models/KSidebarItem";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type SidebarLinkProps = {
    item: KSidebarItem;
}

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 150px;
    height: 100px;
    font-size: 18px;
    text-decoration: none;
    color: white;
    padding-left: 10px;

    &:hover {
        background-color: #585858
    }
`
const SidebarLabel = styled.div`
    margin-left: 10px;
`

const KSubmenu: FC<SidebarLinkProps> = ({ item }) => {
    return (
        <SidebarLink to={item.path}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarLink>
    )
}

export default KSubmenu;