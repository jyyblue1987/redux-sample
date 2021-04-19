import {useRecoilState, useSetRecoilState, useResetRecoilState} from 'recoil';
import {countState} from '../recoil/count';

function ReadWriteCount() {
    const [count, setCount] = useRecoilState(countState);
    const setCountUseSetRecoilState = useSetRecoilState(countState);
    const resetCount = useResetRecoilState(countState);

    return (
        <div>
            <h2>Read Write Count Component</h2>
            <p>Count {count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
                <button onClick={() => setCountUseSetRecoilState(count + 1)}>Increase (useSetRecoilState Use)</button>
                <button onClick={() => setCountUseSetRecoilState(count - 1)}>Decrease (useSetRecoilState Use)</button>
                <button onClick={resetCount}>Counter Reset</button>
            </div>
        </div>
    )
}

export default ReadWriteCount;