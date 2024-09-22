import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

export interface PlayerStateInterface {
    health: number;
    armor: number;
    hunger: number | string;
    thirst: number | string;
    stress: number | string;
    streetLabel: string;
    areaLabel: string;
    heading: string;
    isSeatbeltOn: boolean;
    isInVehicle: boolean;
}

const mockPlayerState: PlayerStateInterface = {
    health: 55,
    armor: 0,
    hunger: 100,
    thirst: 100,
    stress: 5,
    streetLabel: "Downtown Vinewood",
    areaLabel: "Vinewood Blvd",
    heading: "NW",
    isSeatbeltOn: false,
    isInVehicle: true,
};

const playerState = atom<PlayerStateInterface>(mockPlayerState);

export const usePlayerState = () => useAtomValue(playerState);
export const useSetPlayerState = () => useSetAtom(playerState);
export const usePlayerStateStore = () => useAtom(playerState);
