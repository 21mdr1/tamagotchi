import './Main.css';
import background from '../../assets/images/background.PNG';
// import background from '../../assets/images/full.PNG';
// import 

export default function Main() {
    return (
        <main className="main">
            <img src={ background } alt="tamagotchi background" className="background" />
            {/* <img src={ icons } alt="tamagotchi icons" className="buttons" /> */}
            <div title="tamagotchi baby, it jumps around" className="character character--baby" />
            <div title="button A" className="buttons buttons--a" />
            <div title="Button B" className="buttons buttons--b" />
            <div title="Button C" className="buttons buttons--c" />
        </main>
    );
}