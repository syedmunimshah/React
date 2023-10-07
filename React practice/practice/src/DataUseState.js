import React, { useState } from 'react'
import Datas from './DataUseState.json'

const DataUseState = () => {
  const [NData, SetData] = useState(Datas);

  const RemoveAll = () => {
    SetData([]);
  }

  const DeleteAlone = (ItemId) => {
    SetData(NData.filter((item) => {
      return item.id !== ItemId;
    }))
  }

  return (
    <>
      <ul>
        {
          NData.map((items) => {
            return <li key={items.id}>
              {items.name}
              <br />
              <button onClick={() => DeleteAlone(items.id)}>Delete</button>
            </li>

          })
        }
      </ul>
      <button onClick={RemoveAll}>Clear All</button>
    </>
  )
}

export default DataUseState;