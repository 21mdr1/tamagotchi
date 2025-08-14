import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import DevMode from './components/DevMode/DevMode';
import { DevModeContext, TamagotchiContext } from './utils/context';
import Tamagotchi from './utils/tamagotchi';
import { Stage } from './types/consts';

function App() {
    const [ isProd, setIsProd ] = useState(true);
    const [ devModeStage, setDevModeStage ] = useState<Stage>(Stage.None);
    const [ info, infoSetter ] = useState<ITamagotchi>({
        _stage: Stage.Egg,
        _happiness: 4,
        _hunger: 4,
        _age: 0,
        _statuses: [],
        _careScore: 0,
        _discipline: 0,
        _weight: 5,
    });
    
    useEffect(() => {
        async function getInfo() {
            setIsProd(await window.env.isProd());
        }

        getInfo();
    }, []);

    return (
        <TamagotchiContext value={new Tamagotchi(info, infoSetter)}>
            <DevModeContext value={{devMode: !isProd, devModeStage, setDevModeStage}}>
                <Main />
                {!isProd && <DevMode />}
            </DevModeContext>
        </TamagotchiContext>
    );
}


const root = createRoot(document.body);
root.render(
    <App />
);