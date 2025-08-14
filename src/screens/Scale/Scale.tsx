import './Scale.scss';
import { useContext, useState } from 'react';
import { TamagotchiContext } from '../../utils/context';
import ageIm from '../../assets/images/scale/age.png';
import weightIm from '../../assets/images/scale/weight.png';
import fullHeart from '../../assets/images/scale/heart_full.png';
import emptyHeart from '../../assets/images/scale/heart_empty.png';
import tick from '../../assets/images/scale/tick.png';

enum ScaleScreen {
    Weight = 0,
    Discipline,
    Happy,
    Hungry
}

export default function Scale() {
    const [ screen, setScreen ] = useState<ScaleScreen>(ScaleScreen.Weight);
    const Tamagotchi = useContext(TamagotchiContext);

    switch(screen) {
        case ScaleScreen.Weight:
            return <Weight weight={Tamagotchi.weight} age={Tamagotchi.age}/>
        case ScaleScreen.Discipline:
            return <Discipline />
        case ScaleScreen.Happy:
            return <Happy />
        case ScaleScreen.Hungry:
            return <Hungry />
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
                <img src={tick} alt="one" className="discipline__image" />
            </div>
        </>
    );
}

function Happy() {
    return (
        <div className="happy__screen">
            <p className="happy__text">Happy</p>
            <div className="happy__container">
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
            </div>
        </div>
    );
}

function Hungry() {
    return (
        <div className="happy__screen">
            <p className="happy__text">Hungry</p>
            <div className="happy__container">
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
                <img src={fullHeart} alt="heart" className="discipline__image" />
            </div>
        </div>
    );
}