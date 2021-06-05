import React from 'react'
import { GifCardDiv } from './GifCardStyles'

const GifCard: React.FC = ({data, getGif}:any) => {

    return (
        <GifCardDiv src={`${data?.images?.downsized?.url}`} alt={`${data?.slug}`} onClick={() => getGif(data.slug)}/>
    )
}

export default GifCard;
