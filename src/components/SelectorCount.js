import { useRecoilState, useRecoilValue } from 'recoil';
import {countState, inputState, countInputState} from '../recoil/count';

function SelectorCount() {
    const [count, setCount] = useRecoilState(countState);
    const [input, setInput] = useRecoilState(inputState);
    const [countInput, setCountInput] = useRecoilState(countInputState);

    return (
        <div>
            <h2>Read Write Count Selector Component</h2>
            <p>Count {count}</p>
            <p>selector {countInput}</p>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCountInput('9999')}>Selector => 9999</button>
        </div>
    )

}

export default SelectorCount;