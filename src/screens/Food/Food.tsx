import './Food.scss';
import arrow from '../../assets/images/arrow.png';

export default function Food({ selected }: {
    selected: boolean;
}) {

    return (<>
        <div className="food__container">
            <p className="food__text">MEal</p>
            <p className="food__text">SNaCk</p>
        </div>
        <img 
            alt={`Arrow choosing ${selected ? "meal" : "snack"}`} 
            src={arrow}
            className={`food__arrow food__arrow--${selected ? "meal" : "snack"}`}
        />
    </>);
}