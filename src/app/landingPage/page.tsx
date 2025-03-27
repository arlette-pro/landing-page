import Footer from '@/components/landing-page/footer'
import LandingPage from '@/components/landing-page/landingPage'
import React from 'react'

const page = () => {
  const footerNumbers = [
    { image : '/images/coffeCup.png', number : '190+', text: "Lorem ipsum dolor sit amet, consectetur" },
    { image : '/images/coffeCup.png', number : '123K', text: "Lorem ipsum dolor sit amet, consectetur" },
    { image : '/images/coffeCup.png', number : '58', text: "Lorem ipsum dolor sit amet, consectetur" },
]

const footerImages = [
    '/images/Frame1.png',
    '/images/Frame2.png' ,
    '/images/Frame3.png' ,
    '/images/Frame4.png' ,
    '/images/Frame5.png'
]
  return (
    
        <div className='w-[1440px] h-[1345px] bg-[#FFFFFF]'>
        <LandingPage />
        <Footer footerNumbers={footerNumbers} footerImages={footerImages} />
        </div>
  
  )
}

export default page