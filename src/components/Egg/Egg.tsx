import './Egg.scss';
import { useContext, useEffect } from 'react';
import { TamagotchiContext } from '../../utils/context';

export default function Egg() {
    const tamagotchi = useContext(TamagotchiContext);

    useEffect(() => {
        const timeout = tamagotchi.egg();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div 
            title="an egg, it is waiting to hatch" 
            className="egg"
        />
    );
}