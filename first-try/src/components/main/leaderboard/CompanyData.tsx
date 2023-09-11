import { CompanyItem } from "../../../models/CompanyItem";
import CNST from './../../../assets/CNST.png';
import WalBrick from './../../../assets/WalBrick.png';
import CargoXpress from './../../../assets/CargoExpress.png'
import OceanWaves from './../../../assets/OceanWaves.png'
import GlobalTransit from './../../../assets/GlobalTransit.png'
import Ecoship from './../../../assets/Ecoship.png'
import Wheeling from './../../../assets/Wheeling.png'
import Piping from './../../../assets/Piping.png'


export const CompanyData: CompanyItem[] = [
    {
        logo: CNST,
        companyName: "CNST Construction LLC",
        companyID: "2018123987165432",
        vesselAmount: 258,
        rating: 4.6,
        emissionContribution: 11.2,
    },
    {
        logo: WalBrick,
        companyName: "Wal Brick Corp.",
        companyID: "C9876543",
        vesselAmount: 177,
        rating: 4.5,
        emissionContribution: 8.8,
    },
    {
        logo: CargoXpress,
        companyName: "CargoXpress Berhad",
        companyID: "CX-12349013760",
        vesselAmount: 150,
        rating: 3.8,
        emissionContribution: 12.5,
    },
    {
        logo: OceanWaves,
        companyName: "OceanWaves Shipping Corp.",
        companyID: "OWS-562341478",
        vesselAmount: 190,
        rating: 3.5,
        emissionContribution: 11.0,
    },
    {
        logo: GlobalTransit,
        companyName: "GlobalTransit Shippers Ltd.",
        companyID: "2020234089012",
        vesselAmount: 220,
        rating: 3.4,
        emissionContribution: 10.2,
    },
    {
        logo: Wheeling,
        companyName: "Wheeling Solutions Sdn. Bhd.",
        companyID: "WHLL7890",
        vesselAmount: 300,
        rating: 3.2,
        emissionContribution: 9.0,
    },
    {
        logo: Ecoship,
        companyName: "EcoShip Carriers Pte. Ltd.",
        companyID: "ESC-110238744",
        vesselAmount: 180,
        rating: 2.3,
        emissionContribution: 8.5,
    },
    {
        logo: Piping,
        companyName: "Piping Shipping Berhad",
        companyID: "PSA5678",
        vesselAmount: 160,
        rating: 2.0,
        emissionContribution: 7.5,
    },




]

