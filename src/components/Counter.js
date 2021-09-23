import * as actions from '../actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import {Value} from './Value';
import { Control } from './Control';

function Counter(props) {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number)
    
    const setRandomColor = () => {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
        ];

        props.handleSetColor(color);        
    }

    const color = props.color;
    const style = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };

    return (
        <div style={style}>
            <Value number={number}/>
            <Control
                onPlus={() => dispatch(actions.increment())}
                onSubtract={props.handleDecrement}
                onRandomizeColor={setRandomColor}
                onRedColor={props.handleRedColor}
                onGreenColor={props.handleGreenColor}
            />
        </div>
    );
 }

const mapStateProps = (state) => {
    return {
        // number: state.counter.number,
        color: state.ui.color
    };
};

const mapDispatchProps = (dispatch) =>  {
    return {
        // handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))},
        handleRedColor: () => { dispatch(actions.setRedColor())},
        handleGreenColor: () => { dispatch(actions.setGreenColor())}
    };
};

export default connect(mapStateProps, mapDispatchProps)(Counter);