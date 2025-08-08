declare module '*.PNG';
declare module '*.png';
declare module '*.JPG';
declare module '*.jpg';
declare module '*.JPEG';
declare module '*.jpeg';

declare type IDevMode =  React.Context<{
    devMode: boolean;
    devModeStage: Stage;
    setDevModeStage: SetStateAction<Stage>;
}>

declare enum Status {
    Poop = 1,
    Sick,
    Sleep,
}

declare enum Screen {
    Food = 0,
    Light,
    Play,
    Medicine,
    Bath,
    Scale,
    Discipline,
    Attention
}

declare class Tamagotchi {
    happiness: number;
    hunger: number;
    weight: number;
    age: number;
    discipline: number;
    careScore: number;
    stage: Stage;
    statuses: (Status)[];

    constructor(): void;
    eat_meal(): void;
    eat_snack(): void;
    evolve(): void;
    egg(): void;
    baby(): void;
}