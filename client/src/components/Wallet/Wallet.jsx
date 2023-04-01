import React, { useContext } from 'react'
import Emrergency from  '../../images/emergency_home.png'
import Notifications from  '../../images/notifications.png'
import School from  '../../images/school.png'
import Qr from  '../../images/qr_code.png'
import swap from '../../images/swap.png'
import joystick from '../../images/joystick.svg';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth/AuthAction'
export const Wallet=()=> {
  const {user}=useContext(AuthContext)
  const userdata= user.user_data

  return (
    <div className='h-[90vh] flex flex-col  justify-between overflow-auto'>
        <div className=' max-w-xl mx-auto py-4'>
        <h1 className=' px-4 max-h-36 pb-6 font-bold text-2xl 'style={{textAlign:'center'}}>Hola {userdata.username   }!    🖐🏻    </h1>
        <div className='  object-center'>
            <p className='text-3xl font-bold text-right pr-6 pt-16 pb-10 bg-slate-500' type='telephone'  style={{color:'#FFFFFa', borderRadius:'2%',MozAppearance:'textfield', border:'solid transparent',minWidth:'250px'}}> $2222 </p>           
      
      <img>{}</img>
        </div>
       
      
      </div>
      <div className='justify-center mx-auto'>
        <footer className='px-4 items-center dark:bg-slate-700 bg-slate-100 max-w-2xl text-center h-20 space-x-6 sm:space-x-14 sm:px-16 rounded-t-xl flex '>
            <div className='w-12 h-12  rounded-full bg-green-100 hover:scale-95 dark:bg-green-300 hover:duration-100'>
              <img src={School} className='dark:invert scale-90 ' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 rounded-full bg-blue-100 hover:scale-95 dark:bg-blue-300 hover:duration-100'>
              <img src={Qr} className=' dark:invert scale-90' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 rounded-full bg-yellow-100 hover:scale-95 dark:bg-yellow-300 hover:duration-100'>
              <img src={Notifications} className=' dark:invert scale-90' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 rounded-full bg-red-100 hover:scale-95 dark:bg-red-300 hover:duration-100'>
              <img src={Emrergency} className='dark:invert scale-90' style={{cursor:'pointer'}}/>
            </div>
            
            <div className='w-12 h-12 rounded-full bg-orange-100 hover:scale-95 dark:bg-orange-300 hover:duration-100'>
              <img src={swap} className='dark:invert scale-90' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 rounded-full bg-orange-100 hover:scale-95 dark:bg-orange-300 hover:duration-100'>
             <Link to={'/game'}> <img src={joystick} className='dark:invert scale-90' style={{cursor:'pointer'}}/>
             </Link> </div>
        </footer>
      </div>
    </div>
  )
}
