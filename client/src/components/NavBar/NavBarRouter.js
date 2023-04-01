import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthAction'
import { NavbarD } from '../NavBarD/Nav'
import { Navbar } from './Nav'
export const NavBarRouter = () => {
const {user}=useContext(AuthContext)

    return (
        <>{
            !user ? <NavbarD/> : <Navbar/>
        }
        </>
        
  )
}
