import './Food.scss';
import { useState } from 'react';
import mealSnack from '../../assets/images/mealSnack.png';
import arrow from '../../assets/images/arrow.png';

export default function Food() {
    const [ selected, setSelected ] = useState(true);


    return (<>
        <img 
            alt="Meal"
            src={mealSnack}
            className="food__word"
        />
        <img 
            alt={`Arrow choosing ${selected ? "meal" : "snack"}`} 
            src={arrow}
            className={`food__arrow food__arrow--${selected ? "meal" : "snack"}`}
        />
    </>);
}