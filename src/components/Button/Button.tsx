import './Button.scss';
import { useEffect } from 'react';

const keys = {
    'a': 'a',
    'b': 's',
    'c': 'd'
}

export default function Button({ type, action = () => {} }: {
    type: 'a' | 'b' | 'c';
    action?: () => void;
}) {

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            event.key === keys[type] && action();
        }

        window.addEventListener("keydown", handleKeyPress);

        return (() => {window.removeEventListener("keydown", handleKeyPress); })
    }, [action]);

    return (
        <div 
            title={ "Button " + type.toUpperCase() } 
            className={`button button--${type}`} 
            onClick={action}
        />
    );
}