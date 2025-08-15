import './Scale.scss';
import { useContext, useState } from 'react';
import { TamagotchiContext } from '../../utils/context';
import ageIm from '../../assets/images/scale/age.png';
import weightIm from '../../assets/images/scale/weight.png';
import fullHeart from '../../assets/images/scale/heart_full.png';
import emptyHeart from '../../assets/images/scale/heart_empty.png';
import tick from '../../assets/images/scale/tick.png';
import { ScaleScreen } from '../../types/consts';

export default function Scale({ screen }:{
    screen: ScaleScreen;
}) {
    const Tamagotchi = useContext(TamagotchiContext);

    switch(screen) {
        case ScaleScreen.Weight:
            return <Weight weight={Tamagotchi.weight} age={Tamagotchi.age}/>
        case ScaleScreen.Discipline:
            return <Discipline />
        case ScaleScreen.Happy:
            return <HappyHungry type="Happy" score={Tamagotchi.happiness}/>
        case ScaleScreen.Hungry:
            return <HappyHungry type="Hungry" score={Tamagotchi.hunger} />
    }
}


function Weight({ weight, age }: {
    weight: number;
    age: number;
}) {
    return (
        <div className='weight__screen'>
            <div className="weight__container">
                <img
                    src={ageIm}
                    alt="Age:"
                    className="weight__image" 
                />
                <p className="weight__numbers">{`${age < 10 ? '0' : ''}${age}`}</p>
                <p className="weight__text">yr</p>
            </div>
            <div className="weight__container">
                <img
                    src={weightIm}
                    alt="Weight:"
                    className="weight__image" 
                />
                <p className="weight__numbers">{`${weight < 10 ? '0' : ''}${weight}`}</p>
                <p className="weight__text">oz</p>
            </div>
        </div>
    );
}

function Discipline() {
    return (
        <>
            <p className="discipline__text">Discipline</p>
            <div className="discipline__container">
                {/* TODO:  MAKE DISCIPLINE DYNAMIC */}
                <img src={tick} alt="one" className="discipline__image" />
            </div>
        </>
    );
}

function HappyHungry({ type, score }:{
    type: "Happy" | "Hungry",
    score: number
}) {

    return (
        <div className="happyhungry__screen">
            <p className="happyhungry__text">{ type }</p>
            <div className="happyhungry__container">
                {[...Array(score).keys()].map(index => (
                    <img 
                        src={fullHeart} 
                        key={index} 
                        alt="full heart" 
                        className="happyhungry__image" 
                    />
                ))}
                {[...Array(4-score).keys()].map(index => (
                    <img 
                        src={emptyHeart} 
                        key={index}  
                        alt="empty heart" 
                        className="happyhungry__image" 
                    />
                ))}
            </div>
        </div>
    );
}