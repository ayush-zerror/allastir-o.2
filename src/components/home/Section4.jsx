import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section4 = () => {
    return (
        <div className='w-full sm:h-[35vh] md:h-[40vh] sm:pb-[10vw] md:pb-[10vw] h-[63vh] flex  flex-col'>
            <h2 className='sm:text-[10vw] md:text-[7vw] lg:text-[5vw] text-[3vw] xl:text-[5vw] font-semibold sm:mb-[3vw] sm:mt-[2vw]  mb-[2vw] text-center'>Our Products</h2>
            <div className='product-marquee-main w-full sm:h-[60vw] md:h-[60vw]  h-[40vh]  flex items-center overflow-hidden'>
                <div className='product-marquee mq1 w-fit h-full flex items-start sm:gap-[1vw] md:gap-[1vw] gap-[.5vw] px-[.25vw]'>
                    <Link   href='/product' className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw]  w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-1.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] w-full items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Diabetic</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-2.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Fungal</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-3.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Viral</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-4.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Diuretics</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-5.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Hyper Uricemia</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-6.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Bacterial</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-7.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Platelet</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-8.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Alpha-Blocker</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-9.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Ulcer</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-10.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Fungal</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-10.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Polycystic Ovarian</h3>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='product-marquee mq2 w-fit h-full flex items-start sm:gap-[1vw] md:gap-[1vw] gap-[.5vw] px-[.25vw]'>
                    <Link   href='/product' className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw]  w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-1.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] w-full items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Diabetic</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-2.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Fungal</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-3.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Viral</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-4.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Diuretics</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-5.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Hyper Uricemia</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-6.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Bacterial</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-7.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Platelet</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-8.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Alpha-Blocker</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-9.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%] '>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Ulcer</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-10.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Anti-Fungal</h3>
                            </span>
                        </div>
                    </Link>
                    <Link   href="/product" className='mq-card sm:w-[40vw] md:w-[20vw] lg:w-[25vw] xl:w-[25vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/product/allastir-product-generic-10.png" alt="product-image" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%] sm:h-[15%]'>
                            <span className='sm:w-[1vw] md:w-[1vw] lg:w-[1vw] xl:w-[1vw] w-[.3vw] sm:h-[1vw] md:h-[1vw] lg:h-[1vw] xl:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.6vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>Polycystic Ovarian</h3>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section4
