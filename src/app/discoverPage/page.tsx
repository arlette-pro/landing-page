import Discover from '@/components/discoverLandingPage/discover'
import DiscoverFooter from '@/components/discoverLandingPage/discoverFooter';
import DiscoverHeader from '@/components/discoverLandingPage/discoverHeader';
import React from 'react'

const page = () => {

return (
    <div className='w-[1440px] h-[1457px] bg-[#010625]'>
        <DiscoverHeader/>
        <DiscoverFooter  />
    </div>
)
}

export default page