import './Main.scss';
import background from '../../assets/images/background.PNG';
// import background from '../../assets/images/full.PNG';
import Button from '../Button/Button';
import Egg from '../Egg/Egg';


export default function Main() {
    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />
            {/* <img src={ icons } alt="tamagotchi icons" className="buttons" /> */}
            {/* <div title="tamagotchi baby, it jumps around" className="character character--baby" /> */}
            <Egg />

            <Button type='a' />
            <Button type='b' />
            <Button type='c' />
        </main>
    );
}