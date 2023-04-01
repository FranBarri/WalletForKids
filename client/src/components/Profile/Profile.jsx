import React, { useContext } from 'react'
import avatar from "../../images/dino.png"
import { AuthContext } from '../Auth/AuthAction'


export const Profile=()=>{
  const {user}=useContext(AuthContext)
  const userdata= user.user_data
return (
    <div className='py-10'>
          <div className=' text-center py-6 max-w-screen-lg mx-auto pb-10'>
            <img src={avatar} alt='Image not found' className='rounded-full h-44 mx-auto'/>
            <h4 className='py-8 font-sans font-semibold text-2xl'>{userdata.username}</h4>
            <p className='pt-2 text-gray-800 dark:text-gray-200 font-bold'>Correo electronico:</p>
            <p className='pt-2 text-gray-800 dark:text-gray-200'>{userdata.email}</p>
            <p className='pt-2 text-gray-800 dark:text-gray-200 font-bold'>Direccion de billetera:</p>
            <p className='pt-2 text-gray-800 dark:text-gray-200'>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
          </div>         
          
    </div>
  )
}

