import { createContext } from "react";
import { stages, IDevMode } from "../types/types";

const TimerContext = createContext(null);

const DevModeContext: IDevMode = createContext({
    devMode: false,
    devModeStage: "none",
    setDevModeStage: (_: stages) => {}
});

export { TimerContext, DevModeContext }