import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login} from '../Auth/Login'
import {Register} from '../Auth/Register'
import {Wallet} from '../Wallet/Wallet'
import {Game} from '../Game/Game'
import Test from '../Qr/Qr'
import { NavBarRouter } from '../NavBar/NavBarRouter'
import {ParentalRegister} from '../Auth/ParentalRegister'
import { Profile } from '../Profile/Profile'
import { Education } from '../Education/Education'
import { ParentalLoging } from '../Auth/ParentalLoging'

export const Router = () => {
  return (
<>
<NavBarRouter/>
<Routes>
  {/* <Route path="/" element={<Home/>}/> */}
<Route path="/wallet" element={<Wallet/>}/>
<Route path="/login/niñxs" element={<Login/>}/>
<Route path='qr' element={<Test/>}/>
<Route path='Game' element={<Game/>}/>
<Route path="/register/niñxs" element={<Register/>}/>
<Route path="/register/adultxs" element={<ParentalRegister/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/education" element={<Education/>}/>
<Route path="/login/adultxs" element={<ParentalLoging/>}/>


{/* adultos  */}

</Routes>
</>
    )
}
