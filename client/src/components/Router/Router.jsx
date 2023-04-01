import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login} from '../Auth/Login'
import {Register} from '../Auth/Register'
import {Wallet} from '../Wallet/Wallet'
import {Game} from '../Game/Game'
import Test from '../Qr/Qr'
import { NavBarRouter } from '../NavBar/NavBarRouter'
import { Profile } from '../Profile/Profile'

export const Router = () => {
  return (
<>
<NavBarRouter/>
<Routes>
  {/* <Route path="/" element={<Home/>}/> */}
<Route path="/wallet" element={<Wallet/>}/>
<Route path="/login" element={<Login/>}/>
<Route path='qr' element={<Test/>}/>
<Route path='Game' element={<Game/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/profile" element={<Profile/>}/>

</Routes>
</>
    )
}
