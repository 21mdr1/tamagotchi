import { useState, useEffect } from 'react';
import Egg from '../Egg/Egg';
import './Character.scss';
import Timer from '../../utils/timer';

type stage = 'egg' | 'baby' | 'child' | 'teenager' | 'adult';

export default function Character() {
    const [ stage, setStage ] = useState<stage>('egg');

    useEffect(() => {
        const timer = new Timer();
        timer.start((change) => {
            change === 1 && setStage('baby');
        });
    }, [Timer]);

    switch(stage) {
        case 'egg':
            return <Egg />
        case 'baby':
            return <></>
        default:
            return <></>
    }
}