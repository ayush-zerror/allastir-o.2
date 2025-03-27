import Image from 'next/image'
import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full min-h-screen flex sm:flex-col md:flex-col lg:flex-col sm:gap-[6vw] md:gap-[6vw] lg:gap-[6vw] gap-[1vw] items-center p-[2.5vw] sm:pt-[35vw] md:pt-[20vw] lg:pt-[15vw]  sm:px-[4vw] md:px-[4vw] lg:px-[4vw] pt-[5.5vw]'>
            <div className='sm:w-full md:w-full lg:w-full w-[50%] sm:h-fit md:h-fit h-[85vh] sm:bg-transparent md:bg-transparent  bg-zinc-100/40 rounded-2xl sm:p-0 md:p-0  p-[2.5vw] flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='sm:text-[10vw] sm:font-semibold md:text-[7vw] lg:text-[7vw]  text-[5vw] capitalize leading-none'>Contact us</h1>
                    <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] sm:w-full md:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw] my-[1vw] leading-1'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                </div>
                <form className='w-full mt-[1.5vw] sm:mt-[0] md:mt-[0] flex flex-col sm:gap-[3vw] md:gap-[3vw] gap-[1vw] sm:text-[3.8vw] md:text-[3.5vw]'>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent ' type="text" placeholder='Name' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent ' type="text" placeholder='Phone Number' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent ' type="text" placeholder='E-Mail Address' />
                    </div>
                    <div className='w-full flex'>
                        <textarea className='w-full resize-none sm:h-[18vw] md:h-[18vw] lg:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent ' placeholder='Write additional information'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center sm:h-[7vw] md:h-[6vw] lg:h-[10vw]  h-[4vw] sm:mt-[2vw] md:mt-[2vw]'>
                        <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] md:py-[3vw] lg:py-[1.8vw] py-[.6vw] rounded-full font-semibold'>
                            <h4 className='sm:text-[3.5vw] md:text-[3.5vw] lg:text-[2vw] text-[1.1vw] font-normal'>Submit</h4>
                        </div>
                    </div>
                </form>
            </div>
            <div className='sm:w-full md:w-full lg:w-full w-[50%] sm:h-fit md:h-fit h-[85vh] sm:gap-[6vw] md:gap-[6vw] gap-[1vw]  rounded-2xl flex flex-col sm:pt-[4vw]'>
                <div className='w-full h-[45%] rounded-2xl overflow-hidden'>
                    <Image className='w-full h-full object-cover' width={1000} height={1000} priority src="/unit2.jpg" alt="unit-image" />
                </div>
                <div className='w-full h-[55%] sm:h-[75%]  rounded-2xl sm:bg-transparent md:bg-transparent bg-zinc-100/40 flex  flex-wrap sm:p-0 md:p-0 p-[1.5vw] justify-between'>
                    <div className='sm:hidden w-[49%] sm:w-full md:w-full lg:w-full h-fit sm:mb-[4vw]'>
                        <h4 className='sm:text-[5vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold'>Address</h4>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] text-[1.05vw] sm:w-[80%] w-[100%] mt-[.2vw] text-black/70'><span className='font-semibold'>Unit 1</span> : Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town, Chennai - 600103, Tamilnadu, INDIA</p>
                    </div>
                    <div className='sm:hidden w-[49%] sm:w-full md:w-full lg:w-full h-fit sm:mb-[4vw]'>
                        <h4 className='sm:text-[5vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold sm:hidden lg:hidden'><br /></h4>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] text-[1.05vw] sm:w-[80%] w-[100%] mt-[.2vw] text-black/70'><span className='font-semibold'>Unit 2</span> : Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili Mandal, Tirupati District, Andhra Pradesh -524 421.
                        </p>
                    </div>
                    <div className='sm:w-[100%] w-[49%] h-fit'>
                        <h4 className='sm:text-[5vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold'>Contact Times</h4>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] text-[1.05vw] sm:w-[80%] w-[60%] mt-[.2vw] text-black/70'>Monday to Saturday 10:00 am to 6:00 pm ,
                            Sunday Closed</p>
                    </div>
                    <div className='sm:w-[100%] w-[49%] h-fit sm:mt-[4vw]'>
                        <h4 className='sm:text-[5vw] md:text-[4vw] lg:text-[3vw] text-[1vw] font-semibold'>E-Mail Adress</h4>
                        <p className='sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] text-[1.05vw] sm:w-[80%] w-[60%] mt-[.2vw] text-black/70'>Info@allastir.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1