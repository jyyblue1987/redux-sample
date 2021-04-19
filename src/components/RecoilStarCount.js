import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {recoilStarSelector} from '../recoil/count';


function RecoilStarCount() {
    const recoilStarCount = useRecoilValueLoadable(recoilStarSelector);

    if( recoilStarCount.state === 'loading' ) {
        return <div>Loading</div>
    }

    return (
        <div>
            <p>Recoild Github Start Count</p>
            <p>{recoilStarCount.contents}</p>

        </div>
    )
}

export default RecoilStarCount;


