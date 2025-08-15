import './Food.scss';
import arrow from '../../assets/images/arrow.png';
import { EFood } from '../../types/consts';

export default function Food({ selected }: {
    selected: EFood;
}) {

    return (<>
        <div className="food__container">
            <p className="food__text">MEal</p>
            <p className="food__text">SNaCk</p>
        </div>
        <img 
            alt={`Arrow choosing ${selected === EFood.Meal ? "meal" : "snack"}`} 
            src={arrow}
            className={`food__arrow food__arrow--${selected === EFood.Meal ? "meal" : "snack"}`}
        />
    </>);
}