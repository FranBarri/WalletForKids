import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Login} from '../Auth/Login'
import {Register} from '../Auth/Register'
import {Navbar} from '../NavBar/Nav'
import {Wallet} from '../Wallet/Wallet'
import Test from '../Qr/Qr'

export const Router = () => {
  return (
<>
<Navbar/>
<Routes>
  {/* <Route path="/" element={<Home/>}/> */}
<Route path="/wallet" element={<Wallet/>}/>
<Route path="/login" element={<Login/>}/>
<Route path='qr' element={<Test/>}/>
<Route path="/register" element={<Register/>}/>
{/* <Route path="/profile" element={<Profile/>}/> */}
</Routes>
</>
    )
}
