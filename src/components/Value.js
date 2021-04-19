import {useContext, useState, useEffect, createRef, useRef} from 'react';
import {AppContext} from '../contexts/context';
import App from '../App';

export function Value(props) {
    const [count, setCount] = useState(0);

    const user = useContext(AppContext);    

    const ref = useRef();

    const setChangeColor = () => {
        console.log("setChangeColor");
        ref.current.style.backgroundColor = 'red';
    }
    
    return (        
        <div>
            <h1>{props.number} - {user.nickname}</h1>

            <div ref={ref}>
                <p>You clicked {count} times</p>
                <button onClick={() => setChangeColor()}>
                    Click me
                </button>
            </div>
        </div>
    )
}
