import { createContext } from "react";

const TamagotchiContext: React.Context<{
    tamagotchi: Tamagotchi,
    timer: Timer,
}> = createContext({
    tamagotchi: null,
    timer: null,
})

const DevModeContext: IDevMode = createContext({
    devMode: false,
    devModeStage: "none",
    setDevModeStage: (_: stages) => {}
});

export { DevModeContext, TamagotchiContext }