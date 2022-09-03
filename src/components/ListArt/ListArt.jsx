import React, { useState } from 'react'
import ItemArt from '../ItemArt/ItemArt'
import AppPagination from '../Pagination/Pagination';
import FilterCategory from '../FilterCategory/FilterCategory';
import SearchName from '../SearchName/SearchName';


export default function ListArt() {
    const [arts, setArts] = useState([]);

    return (
        <div>
            <div className='appFilter'>
                <FilterCategory />
                <SearchName />
            </div>
            <div className='listArt'>
                {
                    arts.map((art) =>
                        <ItemArt key={art.id} name={art.name} category={art.category} imageArtwork={art.imageArtwork} userImage={art.userImage} />
                    )
                }
            </div>
            <div className='appPagination'>
                <AppPagination setArts={(art) => setArts(art)} />

            </div>
        </div>
    )
}
