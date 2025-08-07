type stages = "none" | "egg" | "hatch" | "baby" | "adult";

type IDevMode =  React.Context<{
    devMode: boolean;
    devModeStage: stages;
    setDevModeStage: (_: stages) => void;
}>


export type { stages, IDevMode };