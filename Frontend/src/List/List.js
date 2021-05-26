import './List.css'
const CampaignCodeList = ({ codes, searchResult }) => {

  // code filtered by serch result
  //if searchResult is empty return all code
  const codeList = searchResult !== "" ? codes.filter(c => c.code.includes(searchResult)) : codes

  const filteredList = codeList.map(i => {
    return <li className="listStyle" key={i.id}>{i.code} {i.description}</li>
  })

  return (
    <ul>
      {filteredList}
    </ul>
  )
}


export default CampaignCodeList;

