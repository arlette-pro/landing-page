import React from 'react'

const LandingPage = () => {
  return (
    <>
        <div className='flex items-center justify-around'>
            <div className='w-[464] h-[498]  mt-28'>
                <h1 className='text-[64px] font-bold'>Your coffee</h1>
                <h1 className='text-[64px] font-bold'>Your vibe</h1>
                <h1 className='text-[64px] font-bold'>Your energy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio accusamus harum temporibus maxime aut nemo assumenda architecto, cum impedit suscipit tempora blanditiis unde corporis cumque!</p>
                <button className='px-[48px] py-[24px] mt-5 rounded-4xl bg-[#A36A4F] text-white'>Explore</button>
            </div>
            <div>
                <img className='w-[592.48] h-[592.38] mt-10 ' src="/images/bottom-image.png" alt="" />
            </div>
        </div>
        
    </>
  )
}

export default LandingPage
