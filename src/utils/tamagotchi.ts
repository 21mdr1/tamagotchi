import { Stage, MIN } from "../types/consts";

export default class Tamagotchi {
    happiness: number;
    hunger: number;
    weight: number;
    age: number;
    discipline: number;
    careScore: number;
    stage: Stage;
    statuses: (Status)[];

    constructor() {
        this.stage = Stage.Egg;
        this.happiness = 5;
        this.hunger = 5;
        this.age = 0;
        this.statuses = [];
    }

    age_up() {
        this.age++;
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

    egg() {

    }

    baby() {
        // can't die
        // 15mins - poop
        // 33mins - sick
        // 40min - fall asleep
        // 45mins - wake up and poop
        // 65mins - evolve

        this.weight = 5; // weight is always 5

        const hungerInverval = setInterval(() => {
            this.hunger > 0 && this.hunger--;
        }, 3 * MIN);

        const happinessInterval = setInterval(() => {
            this.happiness > 0 && this.happiness--;
        }, 4 * MIN);


        setTimeout(() => {
            this.evolve();
            this.statuses = [];

            clearInterval(hungerInverval);
            clearInterval(happinessInterval);
        }, 65 * MIN)
    }
}