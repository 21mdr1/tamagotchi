import { useState, useEffect, useContext, useMemo } from 'react';
import { DevModeContext, TamagotchiContext } from '../../utils/context';
import Egg from '../Egg/Egg';
// import Hatch from '../Hatch/Hatch';
import Baby from '../Baby/Baby';
import './Character.scss';
import { Stage } from '../../types/consts';


export default function Character() {
    const tamagotchi = useContext(TamagotchiContext);
    const { devModeStage } = useContext(DevModeContext);

    const [ stage, setStage ] = useState<Stage>(
        devModeStage !== Stage.None ? devModeStage : tamagotchi.stage
    );

    useEffect(() => {
        setStage(devModeStage !== Stage.None ? devModeStage: tamagotchi.stage);
    }, [devModeStage]);

    switch(stage) {
        case Stage.Egg:
            return <Egg />
        case Stage.Baby:
            return <Baby />
        default:
            return <></>
    }
}