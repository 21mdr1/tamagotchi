import { useState, useContext, useEffect } from 'react';
import { DevModeContext, TamagotchiContext } from '../../utils/context';
import Egg from '../Egg/Egg';
// import Hatch from '../Hatch/Hatch';
import Baby from '../Baby/Baby';
import './Character.scss';
import { Stage, MIN } from '../../types/consts';


export default function Character() {
    const tamagotchi = useContext(TamagotchiContext);
    // const { devModeStage } = useContext(DevModeContext);

    // const [ stage, _ ] = useState<Stage>(
    //     devModeStage !== Stage.None ? devModeStage : tamagotchi.stage
    // );

    // switch(stage) {
    switch(tamagotchi.stage) {
        case Stage.Egg:
            return <Egg />
        case Stage.Baby:
            return <Baby />
        default:
            return <></>
    }
}