import './Baby.scss';
import { useContext, useEffect, useState } from 'react';
import { TamagotchiContext } from '../../utils/context';
import Hatch from '../Hatch/Hatch';


export default function Baby() {
    const tamagotchi = useContext(TamagotchiContext);
    const [ isHatching, setIsHatching ] = useState(tamagotchi.isEvolving);

    useEffect(() => {
        const timeout = tamagotchi.baby();
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsHatching(false);
            tamagotchi.end_evolution()
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    

    return (
        <>{isHatching ? 
            <Hatch /> :
            <div 
                title="tamagotchi baby, it jumps around" 
                className="character" 
            />
        }</>
    );
}