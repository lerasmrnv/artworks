
import React from 'react'
import ListArt from '../ListArt/ListArt'



export default function Main() {
    return (
        <div className='main'>
            <div className='marginPage'>
                <div className='main-title'>
                    <h1>Artworks</h1>
                    <p>588</p>
                </div>
                <ListArt />
            </div>
        </div>
    )
}
