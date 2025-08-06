import { createRoot } from 'react-dom/client';
import { createContext } from 'react';
import Main from './components/Main/Main';
import Timer from './utils/timer';

const TimerContext = createContext(null);
const timer = new Timer();
timer.start(); // this will be moved in the future

const root = createRoot(document.body);
root.render(
    <>
        {/* {!window.env.isProd() && 
            (<p>THIS IS NOT PRODUCTION</p>)
        } */}
        <TimerContext value={timer}>
            <Main />
        </TimerContext>
    </>
);