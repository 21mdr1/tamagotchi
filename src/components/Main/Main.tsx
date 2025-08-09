import './Main.scss';
import { useState } from 'react';
import background from '../../assets/images/background.PNG';
// import background from '../../assets/images/full.PNG';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Character from '../Character/Character';
import Food from '../../screens/Food/Food';

export default function Main() {
    const [ selectedIcon, setSelectedIcon ] = useState(-1);
    const [ screen, setScreen ] = useState(-1);
    const arr: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[] = [0, 1, 2, 3, 4, 5, 6, 7];
    console.log("screen", screen);
    console.log("icon", selectedIcon);

    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />

            {/* screen */}


            {arr.map(num => (
                <Icon icon={num} key={num} selected={selectedIcon === num} />
            ))}

            {
                screen === -1 ? <Character /> :
                screen === 0 ? <Food /> :
                <Character />
            }

            <Button type='a' action={() => {
                screen === -1 && setSelectedIcon(prev => prev === 6? -1 : prev += 1)
            }} />
            <Button type='b' action={() => {
                screen === -1 && selectedIcon >= 0 && setScreen(selectedIcon);
            }} />
            <Button type='c' action={() => {
                if (screen >= 0) {setSelectedIcon(-1); setScreen(-1)}
            }}/>
        </main>
    );
}