// import React from 'react'
//  import Login from '../Login';
// //import Login from "./Login"
// import Navbar from './components/Navbar';
//import { useRouter } from 'next/router'
const Navbar = ({children}) => {

  return (
    <div>
    <Navbar>   
    <main>{children}</main>
    </Navbar>
    </div>
  )
}

export default Navbar
