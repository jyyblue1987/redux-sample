import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import { delay1SecSelector, delayCountState } from '../recoil/count';

function DelayCount() {
    const delay1Sec = useRecoilValueLoadable(delay1SecSelector);
    const [delayCount, setDelayCountState] = useRecoilState(delayCountState);

    if( delay1Sec.state === 'loading' )
    {
        return <div>Loading...</div>
    }

    return (
        <>
            <h3>Cached selector Value</h3>
            <p>{delay1Sec.contents}</p>
            <button onClick={()=>setDelayCountState(delayCount + 1)}>Caching Count Up</button>
            <button onClick={()=>setDelayCountState(delayCount - 1)}>Caching Count Down</button>
        </>
    )


}

export default DelayCount;