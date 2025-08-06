import { useState, useEffect } from 'react';
import Egg from '../Egg/Egg';
import './Character.scss';
import Timer from '../../utils/timer';
import Hatch from '../Hatch/Hatch';
import Baby from '../Baby/Baby';

type stage = 'egg' | 'hatch' | 'baby' | 'child' | 'teenager' | 'adult';

export default function Character() {
    const [ stage, setStage ] = useState<stage>('egg');

    useEffect(() => {
        const timer = new Timer();
        timer.start();

        setTimeout(() => {
            setTimeout(() => {setStage('baby')}, 1500);
            setStage('hatch');
        }, 5*60*1000)

        // timer.start((change) => {
        //     switch(change) {
        //         case 1:
        //             setTimeout(() => {setStage('baby')}, 1500);
        //             setStage('hatch');
        //     }
        // });
    }, [Timer]);

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