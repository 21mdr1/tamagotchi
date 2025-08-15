import { useState, useContext, useEffect } from 'react';
import { DevModeContext, TamagotchiContext } from '../../utils/context';
import Egg from '../Egg/Egg';
import Baby from '../Baby/Baby';
import './Character.scss';
import { Stage } from '../../types/consts';


export default function Character() {
    const tamagotchi = useContext(TamagotchiContext);
    const { devModeStage } = useContext(DevModeContext);
    
    switch(devModeStage !== Stage.None ? devModeStage : tamagotchi.stage) {
        case Stage.Egg:
            return <Egg />
        case Stage.Baby:
            return <Baby />
        default:
            return <></>
    }
}