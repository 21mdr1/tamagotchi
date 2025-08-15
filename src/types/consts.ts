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

enum EScreen {
    Main = -1,
    Food = 0,
    Light,
    Play,
    Medicine,
    Bath,
    Scale,
    Discipline,
    Attention
}

enum EScale {
    Weight = 0,
    Discipline,
    Happy,
    Hungry
}

enum EFood {
    Meal = 0,
    Snack,
}

export { Stage, Status, EScreen, SEC, MIN, HR, DAY, EScale, EFood };