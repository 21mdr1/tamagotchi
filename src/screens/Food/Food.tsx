import './Food.scss';
import mealSnack from '../../assets/images/mealSnack.png';
import arrow from '../../assets/images/arrow.png';

export default function Food() {
    return (<>
        <img 
            alt="Meal"
            src={mealSnack}
            className="food__word"
        />
        <img 
            alt="Arrow choosing" 
            src={arrow}
            className="food__arrow food__arrow--"
        />
    </>);
}