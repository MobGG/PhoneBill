import React from 'react';
import ListItem from './ListItem'

const List = (props) => {
  const phoneBills = props.phoneBills.map((phoneBill) => {
    return <ListItem key={phoneBill.mobileNo} phoneBill={phoneBill} />
  })

  return (
    <div>
      <ul className="col-md-4 list-group">
        {/* {props.phoneBills.length} */}
        {phoneBills}
      </ul>
    </div>
  )
}

export default List;