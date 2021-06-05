import styled from 'styled-components';

const SearchBarDiv = styled.div`
    display: flex;
    justify-content: center;
    `;

const SearchDiv = styled.div`
  display: flex;
  justify-content: left;
  flex-basis:40%;
  flex-wrap: none;
  margin: 5% 0px;  
  border-radius:15px;
  height:40px;
  border: solid 2px #c2c2c2;
  padding-right:10px;
`;

const SearchBox = styled.input`
  border:none;
  color: black;
  border-radius:15px;
  flex-basis:100%;
  padding: 15px;
  outline:none;
`;

const SearchButton = styled.button`
  border:none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export {SearchBarDiv, SearchDiv, SearchBox, SearchButton}