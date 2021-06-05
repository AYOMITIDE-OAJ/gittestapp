import React from 'react'
import {SearchBarDiv, SearchDiv, SearchBox, SearchButton} from './SearchBarStyles';

const SearchBar: React.FC = ({handleChange, onSubmit}:any) => {
    return (
        <SearchBarDiv>
            <div />

            <SearchDiv>
                <SearchBox placeholder='Enter Search Input here' onChange={handleChange} autoFocus/>
                <SearchButton onClick={onSubmit}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </SearchButton>
            </SearchDiv>
            <div />
        </SearchBarDiv>
    )
}

export default SearchBar;
