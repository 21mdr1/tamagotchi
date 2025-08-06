import { createRoot } from 'react-dom/client';
import { createContext, useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Timer from './utils/timer';
import DevMode from './components/DevMode/DevMode';

const TimerContext = createContext(null);
const timer = new Timer();
timer.start(); // this will be moved in the future

function App() {
    const [ isProd, setIsProd ] = useState(true);
    
    useEffect(() => {
        async function getInfo() {
            const response = await window.env.isProd()

            setIsProd(response);
        }

        getInfo();
    }, [])

    return (
        <TimerContext value={timer}>
            <Main />
            {!isProd && <DevMode />}
        </TimerContext>
    );
}


const root = createRoot(document.body);
root.render(
    <>
        <App />
    </>
);