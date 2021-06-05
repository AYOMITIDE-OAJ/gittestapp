import React from 'react';
import {GifPageDetails, GifPageimage, GifPageDiv } from './GifDetailsStyles';

const GifDetails: React.FC = ({data, clearGif}: any) => {
    return (
        <>
          <h2 onClick={clearGif} style={{ cursor:'pointer' }}> <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; Back</h2> 
            <GifPageDiv>
                <GifPageimage src={data?.images?.original?.url} />
                <GifPageDetails>
                    <p> Title: <span> {data.title}</span></p>
                    <p> Rating: <span>{data.rating}</span></p>
                    <p> File Type: <span>{data.type}</span></p>
                    <p> Author: <span>{data.username}</span></p>
                </GifPageDetails>
            </GifPageDiv>  
        </>
    )
}

export default GifDetails;
