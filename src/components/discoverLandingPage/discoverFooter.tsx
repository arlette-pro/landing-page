import React from 'react'

const DiscoverFooter = () => {
    const discoverImages = [
        "/images/discover2.png",
        "/images/discover3.png",
        "/images/discover4.png",
        
    ]
return (
    <>
        <div className='  flex items-center justify-around'>
            {discoverImages.map((image, index) => (
                <div key={index} className="mt-28">
                        <img src={image} alt=""  className="w-[412px] h-[260px]"/>
                </div>
            ))}
        </div>
    </>
)
}

export default DiscoverFooter