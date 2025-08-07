import { createContext } from "react";

const TimerContext = createContext(null);

class Tamagotchi {
    private happiness: number;
    private hunger: number;
    private weight: number;
    private age: number;
    private discipline: number;
    private careScore: number;
    private stage: Stage;
    private statuses: (Status)[];

    constructor() {
        this.stage = Stage.Egg;
        this.happiness = 5;
        this.hunger = 5;
        this.age = 0;
        this.statuses = [];
    }

    eat_meal() {
        this.hunger++;
        this.weight++;
    }

    eat_snack() {
        this.happiness++;
        this.weight += 2;
    }

    evolve() {
        this.stage++;
    }
}

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

export { TimerContext, DevModeContext, TamagotchiContext }