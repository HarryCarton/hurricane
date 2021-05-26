import React, { useState } from 'react'

const SearchBar = ({ handleClearText, handleTextChange, searchValue }) => {

  // const filteredList = props.list
  // console.log(filteredList);
  // const searchList = list.filter((search) => {
  //   return search.includes(searchValue)
  // })
  return (
    <div>
      <input type="text" placeholder="Search Field" value={searchValue} onChange={handleTextChange} />
      <span>{searchValue !== "" && <button onClick={handleClearText}>Clear</button>}</span>
    </div>
  );
}

export default SearchBar;