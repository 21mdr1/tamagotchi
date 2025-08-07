import './Button.scss';

export default function Button({ type, action = () => {} }: {
    type: 'a' | 'b' | 'c';
    action?: () => void;
}) {
    
    return (
        <div 
            title={ "Button " + type.toUpperCase() } 
            className={`button button--${type}`} 
            onClick={action}
        />
    );
}