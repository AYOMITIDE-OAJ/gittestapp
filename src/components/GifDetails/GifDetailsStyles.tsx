import styled from 'styled-components';

const GifPageDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column
    `;

const GifPageimage = styled.img`
    margin-top:20px;
    border-radius:5px;
    width:100%
    `;

const GifPageDetails = styled.div`
    padding: 10px;
    margin: 0 30%;
    >p {
      font-weight:bold;
      span {
      font-weight:normal;
      font-style: italic;
      }
    }
   `;
   
   export {GifPageDetails, GifPageimage, GifPageDiv}    