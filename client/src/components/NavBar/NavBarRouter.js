import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthAction'
import { SessionNavbarKids } from '../NavBarD/SessionNavBarKids'
import { NavbarD } from '../NavBarD/NavBarDkids'
export const NavBarRouter = () => {
    const {user}=useContext(AuthContext)
    return (
        <>
        {!user?<NavbarD/>: <SessionNavbarKids/>}
        
        </>
        
  )
}
