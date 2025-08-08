const SEC = 1000;
const MIN = SEC * 60;
const HR = MIN * 60;
const DAY = HR * 24;

enum Stage {
    None = -1,
    Egg = 0,
    Baby,
    Child,
    Teen,
    Adult,
}

enum Status {
    Poop = 1,
    Sick,
    Sleep,
}

enum Screen {
    Food = 0,
    Light,
    Play,
    Medicine,
    Bath,
    Scale,
    Discipline,
    Attention
}

export { Stage, Status, Screen, SEC, MIN, HR, DAY };