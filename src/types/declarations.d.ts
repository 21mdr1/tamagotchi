declare module '*.PNG';
declare module '*.png';
declare module '*.JPG';
declare module '*.jpg';
declare module '*.JPEG';
declare module '*.jpeg';

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