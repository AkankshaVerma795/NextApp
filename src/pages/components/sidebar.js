// import React from 'react'
// const sidebar = () => {
//   return (
//     <div style={{backgroundColor:"red",height:"100%"}}>sidebar</div>
//   )
// }

// export default sidebar;\
// import React from 'react'
// import MockData from 'react'
// import React, {useState} from "react";
// const sidebar = () => {
//   const [data, setData]=useState(initialState);
//   const [order, setOrder]=useState("ASC");
//   const sorting=(col)=>{
//     if(order==="ASC"){
//       const sorted=[...data].sort((a,b)=>
//       a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
//       );
  
//     setData(sorted);
//     setOrder("ASC");
//   }
//   };
//   return (<>
//     <div>sidebar</div>
//     <div>
//     <table>
//     <thead>
//     <th onClick={()=>sorting("first_name")}>
//     First name</th>
//     <th onClick={()=>sorting("Last name")}>LAst name</th>
//     <th onClick={()=>sorting("email")}>email</th>
//     </thead>
//     </table>
      
//     <tbody>
//       {data.map((d)=>(
//         <tr key={d.id}>
//         <td>{d.first_name}</td>
//         <td>{d.first_name}</td>
//         <td>{d.first_name}</td>
//         <td>{d.first_name}</td>
//         </tr>
//   ))}
//     </tbody>
//     </div>
// </>
//   )
// }

// export default sidebar
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>Tooltip</Button>
    </Tooltip>
  );
}