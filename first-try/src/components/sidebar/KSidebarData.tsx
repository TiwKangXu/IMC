import { AiFillCaretDown, AiFillCaretUp, AiOutlineDashboard } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { KSidebarItem } from "../../models/KSidebarItem";

export const KSidebarData: KSidebarItem[] = [

    {
        title: 'Dashboard',
        path: "/dashboard",
        icon: <AiOutlineDashboard />,
    },
    {
        title: 'Incentive',
        path: "/incentive",
        icon: <BsBuilding />,
    }

]