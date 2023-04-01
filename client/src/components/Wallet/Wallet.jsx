import React from 'react'
import Emrergency from  '../../images/emergency_home.png'
import Notifications from  '../../images/notifications.png'
import School from  '../../images/school.png'
import Qr from  '../../images/qr_code.png'

export const Wallet=()=> {
  return (
    <div className='h-[90vh] flex flex-col  justify-between overflow-auto'>
        <div className=' max-w-xl mx-auto py-4'>
        <h1 className=' px-4 max-h-36 pb-6 font-bold text-2xl'>Hola (Nombre)!🖐🏻</h1>
        <div className='  object-center'>
            <p className='text-3xl font-bold text-right pr-6 pt-7' type='telephone'  style={{color:'#FFFFFa', borderRadius:'2%',MozAppearance:'textfield', background:'#aaab9f', border:'solid transparent'}}> 2222 </p>           
      
      <img>{}</img>
        </div>
       
      
      </div>
      <div className='justify-center mx-auto'>
        <footer className='px-4 items-center dark:bg-slate-700 bg-slate-100 max-w-2xl text-center h-16 space-x-6 sm:space-x-14 sm:px-16 rounded-t-xl flex '>
            <div className='w-12 h-12  bg-red-800 rounded-full hover:scale-95'>
              <img src={School} className=' scale-90 ' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 bg-red-800 rounded-full hover:scale-95'>
              <img src={Qr} className=' scale-90' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 bg-[#50d71e] rounded-full hover:scale-95'>
              <img src={Notifications} className=' scale-90' style={{cursor:'pointer'}}/>
            </div>
            <div className='w-12 h-12 bg-[#50d71e] rounded-full hover:scale-95'>
              <img src={Emrergency} className=' scale-90' style={{cursor:'pointer'}}/>
            </div>
            
            <div className='w-12 h-12 bg-[#50d71e] rounded-full hover:scale-95'>
              {/* <img src={} className=' scale-90' style={{cursor:'pointer'}}/> */}
            </div>
        </footer>
      </div>
    </div>
  )
}
