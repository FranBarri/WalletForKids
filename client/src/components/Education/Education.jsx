import React from 'react'
const ahorro = "https://www.youtube.com/embed/hO7YQP4TIIY"  ;
const stable = "https://www.youtube.com/embed/uHBk8XUgun4" 
const respons = "https://www.youtube.com/embed/hMy9OzIndgc" 

function Education() {
  return (
    <div className=' space-y-6 py-10'>
      <h1 className=' flex justify-center font-bold text-3xl '>WALL-ET SCHOOL</h1>
        <div className='space-y-4 mx-auto  h-auto py-4'>
          <h3 className=' flex justify-center font-bold '>El ahorro</h3>
          <div className= 'flex justify-center'>
              <iframe className=' w-72 h-auto sm:w-96 sm:h-56'src={ahorro} title="Youtube Player" frameborder="0" allowFullScreen /></div>
        </div>        
        <div className='space-y-4   h-auto py-4'>
          <h3 className=' flex justify-center font-bold '>Stablecoins</h3>
          <div className= 'flex justify-center'>    
              <iframe className=' w-72 h-auto sm:w-96 sm:h-56'src={stable} title="Youtube Player" frameborder="0" allowFullScreen /></div>
        </div>
        <div className='space-y-4  h-auto py-4'>
          <h3 className=' flex justify-center font-bold '>El dinero y la responsabilidad</h3>
          <div className= 'flex justify-center'>
            <iframe className=' w-72 h-auto sm:w-96 sm:h-56'src={respons} title="Youtube Player" frameborder="0" allowFullScreen /></div>
        </div>
    </div>
  )
}

export default Education