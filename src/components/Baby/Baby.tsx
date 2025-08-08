import './Baby.scss';
import { useContext } from 'react';
import { TamagotchiContext } from '../../utils/context';


export default function Baby() {
    const tamagotchi = useContext(TamagotchiContext);
    tamagotchi.baby();

    return (
        <div 
            title="tamagotchi baby, it jumps around" 
            className="character" 
        />
    );
}