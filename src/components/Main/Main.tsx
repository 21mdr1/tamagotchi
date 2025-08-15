import './Main.scss';
import { useState, useContext } from 'react';
import background from '../../assets/images/background.PNG';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Character from '../Character/Character';
import Food from '../../screens/Food/Food';
import Scale from '../../screens/Scale/Scale';
import { Screen, ScaleScreen } from '../../types/consts';
import { TamagotchiContext } from '../../utils/context';

export default function Main() {
    const Tamagotchi = useContext(TamagotchiContext);
    const [ selectedIcon, setSelectedIcon ] = useState(-1);
    const [ screen, setScreen ] = useState<Screen>(Screen.Main);

    const [ scaleScreen, setScaleScreen ] = useState<ScaleScreen>(ScaleScreen.Weight);
    const [ foodSelected, setFoodSelected ] = useState<boolean>(true);

    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />

            {/* screen */}


            {[...Array(8).keys()].map(num => (
                <Icon icon={num} key={num} selected={selectedIcon === num} />
            ))}

            {
                screen === -1 ? <Character /> :
                screen === 0 ? <Food selected={foodSelected}/> :
                screen === 5 ? <Scale screen={scaleScreen} /> :
                <Character />
            }

            {/* Buttons */}

            <Button type='a' action={() => {
                switch(screen) {
                    case Screen.Main:
                        setSelectedIcon(prev => prev === Screen.Discipline? Screen.Main : prev + 1);
                        return
                    case Screen.Food:
                        setFoodSelected(prev => !prev);
                        return
                }
            }} />
            <Button type='b' action={() => {
                switch(screen) {
                    case Screen.Main:
                        selectedIcon !== Screen.Main && setScreen(selectedIcon);
                        return
                    case Screen.Food:
                        foodSelected? Tamagotchi.eat_meal() : Tamagotchi.eat_snack();
                        setSelectedIcon(Screen.Main); setScreen(Screen.Main);
                        return
                    case Screen.Scale:
                        setScaleScreen(prev => prev === ScaleScreen.Hungry? ScaleScreen.Weight : prev + 1);
                        return
                }
            }} />
            <Button type='c' action={() => {
                if (screen >= 0) {setSelectedIcon(Screen.Main); setScreen(Screen.Main); setFoodSelected(true); setScaleScreen(ScaleScreen.Weight)}
            }}/>
        </main>
    );
}