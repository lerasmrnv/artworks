import React from 'react'

export default function ItemArt(props) {
    let { name, category, imageArtwork, userImage } = props;
    return (
        <div className='itemArt'>
            <img src={imageArtwork} />
            <div className='itemArt-textContainer'>
                <img src={userImage} />
                <div>
                    <p className='textContainer-name'>{name}</p>
                    <p className='textContainer-category'>{category}</p>
                </div>
            </div>
        </div>
    )
}
