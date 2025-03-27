interface FooterNumber{
    image: string,
    number: string,
    text: string
}

interface FooterProps{
    footerNumbers: FooterNumber[],
    footerImages: string[]
}
const Footer = ({footerNumbers, footerImages}: FooterProps) => {
    
return (
    <>
        <div className="w-[878px] h-[188px] bg-[#ECDAC4] mx-auto relative top-20 z-10 rounded-[150px]">
            <div className="flex justify-around items-center space-x-10 p-8">
                {footerNumbers.map((link, index) => (
                    <div key={index} className="flex flex-col items-center w-[170px] h-[140px]" >
                        <img src={link.image} alt="" className="text-center"/>
                        <div>
                            <h1 className="text-black text-center font-bold text-[32px]">{link.number}</h1>
                            <p className="text-black text-justify">{link.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-screen h-[472px]  bg-[#363031] flex items-center justify-around'>
            {footerImages.map((image, index) => (
                <div key={index} className="mt-28">
                        <img src={image} alt=""  className="w-[186px] h-[286px]"/>
                </div>
            ))}
        </div>

        

    </>
)
}

export default Footer