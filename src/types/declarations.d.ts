declare module '*.PNG';
declare module '*.png';
declare module '*.JPG';
declare module '*.jpg';
declare module '*.JPEG';
declare module '*.jpeg';

declare type stages = "none" | "egg" | "hatch" | "baby" | "adult";

declare type IDevMode =  React.Context<{
    devMode: boolean;
    devModeStage: stages;
    setDevModeStage: (_: stages) => void;
}>

declare enum Stage {
    Egg = 0,
    Baby,
    Child,
    Teen,
    Adult,
}

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

declare class Timer {
    time: number;
    timeInterval: NodeJS.Timeout;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;

    start(): void;
    convert(): void;
    stop(): void;
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