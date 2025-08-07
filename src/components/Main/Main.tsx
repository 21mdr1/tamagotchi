import './Main.scss';
import { useState } from 'react';
import background from '../../assets/images/background.PNG';
// import background from '../../assets/images/full.PNG';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Character from '../Character/Character';

export default function Main() {
    const [ selectedIcon, setSelectedIcon ] = useState(-1);
    const arr: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[] = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />

            {arr.map(num => (
                <Icon icon={num} selected={selectedIcon === num} />
            ))}

            <Character />

            <Button type='a' />
            <Button type='b' action={() => {
                setSelectedIcon(prev => prev === 6? -1 : prev += 1)
            }} />
            <Button type='c' />
        </main>
    );
}