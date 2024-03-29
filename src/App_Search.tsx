import { useState } from 'react';
import { useQuery } from './gqty';


function AppSearch() {

  const { cars } = useQuery()

  const [term, setTerm] = useState("")

  return (
    <div>
      <h1>GQTY search query stacking</h1>

      <input value={term} onChange={e => setTerm(e.target.value)} />

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setTerm("ford")}>ford</button>
        <button onClick={() => setTerm("bmw")}>bmw</button>
        <button onClick={() => setTerm("mercedes")}>mercedes</button>
      </div>

      <h1>Cars</h1>

      <ul>
        {cars({
          where: {
            brandContains: term
          }
        }).map(c => {
          return (
            <li>{c?.brand}</li>
          )
        })}
      </ul>


    </div>
  )
}

export default AppSearch
