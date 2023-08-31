import { AiFillCaretDown, AiFillCaretUp, AiOutlineDashboard } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Dashboard',
        path: "/dashboard",
        icon: <AiOutlineDashboard />,
        // iconClosed: <AiFillCaretDown />,
        // iconOpened: <AiFillCaretUp />,
    },
    {
        title: 'Incentive',
        path: "/incentive",
        icon: <BsBuilding />,
        // iconClosed: <AiFillCaretDown />,
        // iconOpened: <AiFillCaretUp />,
    }

]