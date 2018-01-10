import React from 'react';

const ListItem = ({ phoneBill }) => {
  // console.log(phoneBill);
  const mobileNo = "หมายเลข " + phoneBill.mobileNo;
  const payment = "ค่าบริการ " + phoneBill.payment + " บาท";
  return (
    <div>
      <div>
        {mobileNo}
      </div>
      <div>
        {payment}
      </div>
      -----------------------------------
        </div>
  )
}

export default ListItem;