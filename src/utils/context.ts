import { createContext } from "react";
import { Stage } from "../types/consts";

const TamagotchiContext: React.Context<Tamagotchi> = createContext(null)

const DevModeContext: IDevMode = createContext({
    devMode: false,
    devModeStage: Stage.None,
    setDevModeStage: (_: Stage) => {}
});

export { DevModeContext, TamagotchiContext }