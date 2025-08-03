import './Main.css';
import background from '../../assets/images/background.PNG';
import buttonsUp from '../../assets/images/buttons_up.PNG';
import icons from '../../assets/images/icons_bright.PNG';

export default function Main() {
    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />
            <img src={ buttonsUp } alt="tamagotchi buttons" className="buttons" />
            <img src={ icons } alt="tamagotchi buttons" className="buttons" />
            <div title="tamagotchi baby, it jumps around" className="character character--baby" />
        </main>
    );
}