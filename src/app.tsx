import { createRoot } from 'react-dom/client';
import { createContext } from 'react';
import Main from './components/Main/Main';
import Timer from './utils/timer';

const TimerContext = createContext(null);
const timer = new Timer();

const root = createRoot(document.body);
root.render(
    <TimerContext value={timer}>
        <Main />
    </TimerContext>
    
);