import './Main.scss';
import { useState } from 'react';
import background from '../../assets/images/background.PNG';
// import background from '../../assets/images/full.PNG';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Character from '../Character/Character';
import Food from '../../screens/Food/Food';
import Scale from '../../screens/Scale/Scale';
import { Screen, ScaleScreen } from '../../types/consts';

export default function Main() {
    const [ selectedIcon, setSelectedIcon ] = useState(-1);
    const [ screen, setScreen ] = useState<Screen>(Screen.Main);

    const [ scaleScreen, setScaleScreen ] = useState<ScaleScreen | -1>(-1);

    console.log(scaleScreen);

    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />

            {/* screen */}


            {[...Array(8).keys()].map(num => (
                <Icon icon={num} key={num} selected={selectedIcon === num} />
            ))}

            {
                screen === -1 ? <Character /> :
                screen === 0 ? <Food /> :
                screen === 5 ? <Scale screen={scaleScreen} /> :
                <Character />
            }

            {/* Buttons */}

            <Button type='a' action={() => {
                screen === Screen.Main && setSelectedIcon(prev => prev === Screen.Discipline? Screen.Main : prev + 1)
            }} />
            <Button type='b' action={() => {
                switch(screen) {
                    case Screen.Main:
                        selectedIcon !== Screen.Main && setScreen(selectedIcon);
                    case Screen.Food:
                        //
                    case Screen.Scale:
                        setScaleScreen(prev => prev === ScaleScreen.Hungry? ScaleScreen.Weight : prev + 1)
                }
            }} />
            <Button type='c' action={() => {
                if (screen >= 0) {setSelectedIcon(Screen.Main); setScreen(Screen.Main)}
            }}/>
        </main>
    );
}