import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import DevMode from './components/DevMode/DevMode';
import { DevModeContext, TamagotchiContext } from './utils/context';
import Tamagotchi from './utils/tamagotchi';
import { Stage } from './types/consts';

const tamagotchi = new Tamagotchi();

function App() {
    const [ isProd, setIsProd ] = useState(true);
    const [ devModeStage, setDevModeStage ] = useState<Stage>(Stage.None);
    
    useEffect(() => {
        async function getInfo() {
            setIsProd(await window.env.isProd());
        }

        getInfo();
    }, []);

    return (
        <TamagotchiContext value={tamagotchi}>
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