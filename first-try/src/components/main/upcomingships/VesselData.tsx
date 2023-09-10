import { GiCargoShip, GiShipBow } from "react-icons/gi";
import { VesselItem } from "../../../models/VesselItem";

export const VesselData: VesselItem[] = [

    {
        index: 1,
        VIN: "IMO 1234567",
        type: "Container",
        company: "Woodoow Planks Berhad",
        ETA: "13:00",
        berth: "Berth 1",
        icon: <GiCargoShip />,
    },
    {
        index: 2,
        VIN: "IMO 7654321",
        type: "Container",
        company: "Silver Zinc Berhad",
        ETA: "15:00",
        berth: "Berth 2",
        icon: <GiShipBow />,
    }

]