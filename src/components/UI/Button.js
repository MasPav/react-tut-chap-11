import classes from './Button.module.css';
export default function Button (props) {
    return (
        <>
            <button
            type={props.type || 'button'}
            style={props.style}
            className={`${classes.button} ${props.className}`}
            disabled={props.disabled} 
            onClick={props.onClick}>{props.children}</button>
        </>
    )
}