import { useState, useEffect, useContext, useMemo } from 'react';
import { DevModeContext, TimerContext } from '../../utils/context';
import { stages } from '../../types/types';
import Egg from '../Egg/Egg';
import Hatch from '../Hatch/Hatch';
import Baby from '../Baby/Baby';
import './Character.scss';

export default function Character() {
    const timer = useContext(TimerContext);
    const { devModeStage } = useContext(DevModeContext);

    const [ stage, setStage ] = useState<stages>(
        devModeStage !== "none" ? devModeStage : "egg"
    );

    useEffect(() => {
        setStage(devModeStage !== "none" ? devModeStage: "egg");
    }, [devModeStage]);

    switch(stage) {
        case 'egg':
            return <Egg />
        case 'hatch':
            return <Hatch />
        case 'baby':
            return <Baby />
        default:
            return <></>
    }
}