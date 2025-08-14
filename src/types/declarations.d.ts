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

declare enum ScaleScreen {
    Weight = 0,
    Discipline,
    Happy,
    Hungry
}

declare type ValueOf<T> = T[keyof T];

declare interface ITamagotchi {
    _happiness: number;
    _hunger: number;
    _weight: number;
    _age: number;
    _discipline: number;
    _careScore: number;
    _stage: Stage;
    _statuses: (Status)[];
}