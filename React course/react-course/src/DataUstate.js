
import React, { useState } from 'react';
import Datas from './DataUstate.json';

const DataUstate = () => {

  const [Data, SetData] = useState(Datas);

  const ClearData = () => {
    SetData([]);
  }

  const RemoveAloneData = (ItemId) => {
    SetData(Data.filter((Item) => {
      return Item.id !== ItemId;
    }))
  }

  const UPdateData = (ItemID) => {
    SetData(Data.map((Items) => {
      if (Items.id === ItemID) {
        return { name: "Waqas Bhai", city: "Queta" }
      }
      else {
        return Items;
      }

    }))
  }



  return (
    <>
      <ul>
        {
          Data.map(items =>
            <li key={items.id}>

              {items.name}

              {items.city}
              <br />
              <button onClick={() => RemoveAloneData(items.id)}>Remove</button>
              <button onClick={() => UPdateData(items.id)}>UPDATAE</button>

            </li>

          )

        }

      </ul>
      <button onClick={ClearData}>clear</button>

    </>
  )
}

export default DataUstate;