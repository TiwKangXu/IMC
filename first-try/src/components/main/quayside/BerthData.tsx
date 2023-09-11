import { GiCargoShip, GiShipBow } from "react-icons/gi";
import { BerthItem } from "../../../models/BerthItem";

export const VesselData: BerthItem[] = [
    {
        berthID: 1,
        currentBerthVIN: "IMO 0000000",
        progress: 70,
        queueingBerth: [
            {
                VIN: "IMO 0000001",
                waitingTime: "20"
            },
            {
                VIN: "IMO 0000002",
                waitingTime: "30"
            },
            {
                VIN: "IMO 0000003",
                waitingTime: "40"
            },
        ]
    }, {
        berthID: 2,
        currentBerthVIN: "IMO 2000000",
        progress: 15,
        queueingBerth: [
            {
                VIN: "IMO 2000001",
                waitingTime: "20"
            },
            {
                VIN: "IMO 2000002",
                waitingTime: "30"
            },
        ]
    }, {
        berthID: 3,
        currentBerthVIN: "IMO 3000000",
        progress: 100,
        queueingBerth: [
            {
                VIN: "IMO 4000001",
                waitingTime: "20"
            },
            {
                VIN: "IMO 4000002",
                waitingTime: "30"
            },
            {
                VIN: "IMO 4000003",
                waitingTime: "40"
            },
            {
                VIN: "IMO 4000004",
                waitingTime: "40"
            },
            {
                VIN: "IMO 4000002",
                waitingTime: "30"
            },
            {
                VIN: "IMO 4000003",
                waitingTime: "40"
            },
            {
                VIN: "IMO 4000004",
                waitingTime: "40"
            },
        ]
    },

]