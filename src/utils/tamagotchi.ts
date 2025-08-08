import { MIN } from "../types/consts";

export default class Tamagotchi {
    info: ITamagotchi;
    infoSetter: React.Dispatch<React.SetStateAction<ITamagotchi>>;
    isEvolving: boolean;

    constructor(
        info: ITamagotchi, 
        infoSetter: (_: ITamagotchi) => void
    ) {
        this.info = info
        this.infoSetter = infoSetter;
    }

    get stage() {return this.info._stage}
    get happiness() {return this.info._happiness}
    get hunger() {return this.info._hunger}
    get weight() {return this.info._weight}
    get age() {return this.info._age}
    get discipline() {return this.info._discipline}
    get careScore() {return this.info._careScore}
    get statuses() {return this.info._statuses}

    set_info(name: keyof ITamagotchi, value: ValueOf<ITamagotchi>) {
        this.infoSetter(prev => ({...prev, [name]: value}));
    }

    age_up() {
        this.set_info("_age", this.age + 1);
    }

    eat_meal() {
        this.set_info("_hunger", this.hunger + 1);
        this.set_info("_weight", this.weight + 1);
    }

    eat_snack() {
        this.set_info("_happiness", this.happiness + 1);
        this.set_info("_weight", this.weight + 2);
    }

    evolve() {
        this.set_info("_stage", this.stage + 1);
        this.isEvolving = true;
    }

    end_evolution() {
        this.isEvolving = false;
    }

    egg() {
        return setTimeout(() => {
            this.evolve();
        // }, 5 * MIN);
        }, 10000);
    }

    baby() {
        // can't die
        // 15mins - poop
        // 33mins - sick
        // 40min - fall asleep
        // 45mins - wake up and poop
        // 65mins - evolve

        this.set_info("_weight", 5); // weight is always 5

        const hungerInverval = setInterval(() => {
            this.hunger > 0 && this.set_info("_hunger", this.hunger - 1);
        }, 3 * MIN);

        const happinessInterval = setInterval(() => {
            this.happiness > 0 && this.set_info("_happiness", this.happiness - 1);
        }, 4 * MIN);


        return setTimeout(() => {
            this.evolve();
            this.set_info("_statuses", []);

            clearInterval(hungerInverval);
            clearInterval(happinessInterval);
        }, 65 * MIN)
    }
}