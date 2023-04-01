 import React from 'react'
 
 function Hero() {
   return (
    <div className=' '>
       <h1 className='h-[10vh] text-center pt-10 text-2xl font-bold'> Bienvenido, (nombre)</h1>
       <div className='flex h-[80vh]  flex-col  justify-between overflow-auto py-20 items-center'>
       <div className=''>
            <button className=' w-56 h-20 bg-red-100 rounded-xl text-2xl border-red-200 border-8 dark:bg-red-500 dark:border-red-400'>
                A jugar!🕹
            </button>
       </div>
       <div>
            <button className=' w-56 h-20 bg-green-100 rounded-xl text-2xl border-green-200 border-8 dark:bg-green-500 dark:border-green-400'>
                Quiero aprender📘
            </button>
       </div>
       <div>
            <button className=' w-56 h-20 bg-blue-100 rounded-xl text-2xl border-blue-200 border-8 dark:bg-blue-500 dark:border-blue-400'>
                Comprar💰
            </button>
       </div>
       </div>
     </div>
   )
 }
 
 export default Hero
 