import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Timer from './utils/timer';
import DevMode from './components/DevMode/DevMode';
import { TimerContext, DevModeContext} from './utils/context';

const timer = new Timer();
timer.start(); // this will be moved in the future

function App() {
    const [ isProd, setIsProd ] = useState(true);
    const [ devModeStage, setDevModeStage ] = useState<stages>("none");
    
    useEffect(() => {
        async function getInfo() {
            setIsProd(await window.env.isProd());
        }

        getInfo();
    }, []);

    return (
        <TimerContext value={timer}>
            <DevModeContext value={{devMode: !isProd, devModeStage, setDevModeStage}}>
                <Main />
                {!isProd && <DevMode />}
            </DevModeContext>
        </TimerContext>
    );
}


const root = createRoot(document.body);
root.render(
    <App />
);