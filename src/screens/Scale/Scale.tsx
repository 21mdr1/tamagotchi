import './Scale.scss';
import { useContext, useState } from 'react';
import { TamagotchiContext } from '../../utils/context';
import age from '../../assets/images/scale/age.png';
import weight from '../../assets/images/scale/weight.png';
import disciplineScale from '../../assets/images/scale/discipline_scale.png';
import happy from '../../assets/images/scale/happy.png';
import hungry from '../../assets/images/scale/hungry.png';
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

    return <Discipline />

    switch(screen) {
        case ScaleScreen.Weight:
            return <Weight />
        case ScaleScreen.Discipline:
            return <Discipline />
        case ScaleScreen.Happy:
            return <Happy />
        case ScaleScreen.Hungry:
            return <Hungry />
    }
}


function Weight() {
    return (
        <div className='weight__screen'>
            <div className="weight__container">
                <img
                    src={age}
                    alt="Age:"
                    className="weight__image" 
                />
                <p className="weight__numbers">20</p>
                <p className="weight__text">yr</p>
            </div>
            <div className="weight__container">
                <img
                    src={weight}
                    alt="Weight:"
                    className="weight__image" 
                />
                <p className="weight__numbers">30</p>
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
        <img 
            alt=''
            src={happy}
            className=""
        />
    );
}

function Hungry() {
    return (
        <img 
            alt=''
            src={hungry}
            className=""
        />
    );
}