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

// declare class Tamagotchi implements ITamagotchi {
//     get happiness(): number;
//     get hunger(): number;
//     get weight(): number;
//     get age(): number;
//     get discipline(): number;
//     get careScore(): number;
//     get stage(): number;
//     get statuses(): (Status)[];

//     info: ITamagotchi;
//     infoSetter: React.Dispatch<React.SetStateAction<ITamagotchi>>;
//     isEvolving: boolean;

//     constructor(info: ITamagotchi, infoSetter: (_: ITamagotchi) => void): void;
//     eat_meal(): void;
//     eat_snack(): void;
//     evolve(): void;
//     egg(): NodeJS.Timeout;
//     baby(): NodeJS.Timeout;
//     end_evolution(): void;
// }