import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CampaignCodeList from '../List/List';
import SearchBar from '../SearchBar/SearchBar';

// const codes = [
//   { id: 11, code: 'BS11', description: 'beagleStreet' },
//   { id: 22, code: 'BL22', description: 'budget' }
// ]

const Home = () => {

  const [codeList, setCodeList] = useState([])
  const [searchValue, setSearchValue] = useState("")
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://localhost:44387/campaigncodes')
      .then(response => {
        console.log(response)
        setCodeList(response.data)
        // setIsLoading(false)

      })
      .catch(error => {
        throw Error(error)
      })

  }, [])

  const handleTextChange = (e) => {
    setSearchValue(e.target.value.toUpperCase())
    if (e.target.value === "") setCodeList(codeList)
  }

  const handleClearText = () => {
    setSearchValue("")
  }

  return (
    <div className="home">
      <h1>Campaign Codes</h1>
      <SearchBar
        handleTextChange={handleTextChange}
        handleClearText={handleClearText}
        searchValue={searchValue}
      />
      {/* {isLoading && <div>Loading...</div>} */}
      <CampaignCodeList
        codes={codeList}
        searchResult={searchValue}
      />
    </div>
  );
}

export default Home
