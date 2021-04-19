import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { imageState, selectedImageState } from '../recoil/image';

const Image = ({id}) => {
    const {name, url} = useRecoilValue(imageState(id));
    const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
    const onClick = () => {
        setSelectedImage(id);
    }

    return (
        <div className="image">
            <div>{name}</div>
            <img
                className={selectedImage === id ? "selected": ""}
                src={url}
                alt={name}
                onClick={onClick}
            />
        </div>
    )

}

export default Image;