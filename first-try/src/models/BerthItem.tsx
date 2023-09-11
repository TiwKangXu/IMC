import { QueueVessel } from "./QueueVessel";

export interface BerthItem {
    berthID: number;
    currentBerthVIN: string;
    progress: number;
    queueingBerth: QueueVessel[];
}