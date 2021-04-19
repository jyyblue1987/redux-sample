import React from 'react';
import { useRecoilValue } from 'recoil';
import { imageListState } from '../recoil/image';
import Image from './Image';

const ImageList = () => {
    const imageList = useRecoilValue(imageListState);
    return (
        <div className="images">
            {
                imageList.map(id => (
                    <Image id={id} key={id} />
                ))
            }
        </div>
    )
}

export default ImageList;
