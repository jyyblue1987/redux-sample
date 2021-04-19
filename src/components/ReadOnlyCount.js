import {useRecoilValue} from 'recoil';
import {countState} from '../recoil/count';

function ReadOnlyCount() {
    const count = useRecoilValue(countState);

    return (
        <div>
            <h2>Read Only Component</h2>
            <p>Count {count}</p>
        </div>
    )
}

export default ReadOnlyCount;