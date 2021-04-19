export function Control(props) {
    return (
        <div>
            <button onClick={props.onPlus}>+</button>
            <button onClick={props.onSubtract}>-</button>
            <button onClick={props.onRandomizeColor}>Randomize Color</button>
            <button onClick={props.onRedColor}>Red Color</button>
            <button onClick={props.onGreenColor}>Green Color</button>
        </div>
    )
}

