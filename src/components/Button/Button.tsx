import './Button.scss';

export default function Button({ type }: {
    type: 'a' | 'b' | 'c';
}) {
    
    return (
        <div 
            title={ "Button " + type.toUpperCase() } 
            className={`button button--${type}`} 
            onClick={() => {}}
        />
    );
}