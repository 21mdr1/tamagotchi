import './Main.scss';
import { useState, useContext } from 'react';
import background from '../../assets/images/background.PNG';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Character from '../Character/Character';
import Food from '../../screens/Food/Food';
import Scale from '../../screens/Scale/Scale';
import { EScreen, EScale, EFood } from '../../types/consts';
import { TamagotchiContext } from '../../utils/context';

export default function Main() {
    const Tamagotchi = useContext(TamagotchiContext);

    const [ selected, setSelected ] = useState({
        icon: -1 as EScreen,
        screen: EScreen.Main,
        food: EFood.Meal,
        scale: EScale.Weight,
    });

    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />

            {/* screen */}


            {[...Array(8).keys()].map(num => (
                <Icon icon={num} key={num} selected={selected.icon === num} />
            ))}

            {
                selected.screen === -1 ? <Character /> :
                selected.screen === 0 ? <Food selected={selected.food}/> :
                selected.screen === 5 ? <Scale screen={selected.scale} /> :
                <Character />
            }

            {/* Buttons */}

            <Button type='a' action={() => {
                setSelected( prev => {
                    switch(selected.screen) {
                        case EScreen.Main:
                            return {...prev, ["icon"]:  prev.icon === EScreen.Discipline? EScreen.Main : prev.icon + 1}
                        case EScreen.Food:
                            return {...prev, ["food"]: (prev.food + 1) % 2}
                    }
                });
            }} />
            <Button type='b' action={() => {
                setSelected(prev => {
                    switch(selected.screen) {
                        case EScreen.Main:
                            if(prev.icon !== EScreen.Main) {
                                return {...prev, ["screen"]: prev.icon}
                            }
                        case EScreen.Food:
                            prev.food === EFood.Meal ? Tamagotchi.eat_meal() : Tamagotchi.eat_snack();
                            return {...prev, ["screen"]: EScreen.Main, ["icon"]: EScreen.Main, ['food']: EFood.Meal}
                        case EScreen.Scale:
                            return {...prev, ["scale"]: (prev.scale + 1) % 4}
                    }
                });
            }} />
            <Button type='c' action={() => {
                if(selected.screen >= EScreen.Food) {
                    setSelected(prev => ({...prev, 
                        ["icon"]: EScreen.Main, 
                        ["screen"]: EScreen.Main,
                        ["food"]: EFood.Meal,
                        ["scale"]: EScale.Weight,
                    }))
                } else if(selected.icon >= EScreen.Food){
                    setSelected(prev => ({...prev, ["icon"]: EScreen.Main}))
                }
            }}/>
        </main>
    );
}