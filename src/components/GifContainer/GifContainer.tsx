import React from 'react'
import {GifContainerDiv} from './GifContainerStyles';
import GifCard from '../GifCard/GifCard';

interface PropTypes {
    data:any;
    getGif:any;
}

const GifContainer: React.FC<PropTypes> = ({data, getGif}) => {

    return (
        <GifContainerDiv>
            {
                data?.map((result:any)=>(
                    <GifCard key={data.indexOf(result) } data={result} getGif={getGif}/>
                ))
            }
        </GifContainerDiv>
    )
}

export default GifContainer;
