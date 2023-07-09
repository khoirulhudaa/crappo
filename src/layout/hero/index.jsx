import React, { useEffect } from 'react'
import { ArrowRight, BgHero, WhiteOrnamentLeft, WhiteOrnamentRight } from '../../assets'
import { Button } from '../../components'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Hero = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='relative w-screen overflow-hidden ml-auto mr-auto py-[40px] lg:py-[70px] flex items-center h-max bg-[#0D0D2B]'>
        <div className='w-[100vw] block lg:flex px-[30px] lg:px-[100px] ml-auto mr-auto h-max'>
          <div className='relative w-[100%] lg:w-[50vw] h-max flex flex-col justify-center  lg:w-[50vw]'>
            <div className='w-max bg-white bg-opacity-[0.2] items-center rounded-full px-2 py-2 h-max flex justify-center'>
              <div className='bg-white text-center rounded-full py-1 text-[12px] px-2 text-[#0D0D2B] font-bold mr-3'>
                75% SAVE
              </div>
              <p className='text-white text-[13px]'>For the Black Friday weekend</p>
            </div>
            
            <h1 data-aos='fade-up' className='text-[40px] lg:text-[60px] w-full font-bold mt-[36px] text-white leading-[1.4em]'>Fastest & secure platform to invest in crypto</h1>
            <p data-aos='fade-up' className='text-slate-300 leading-[2em] text-[16px] w-[90%] lg:w-[80%] mt-[24px]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
            <Button type={'with-icon'} data-aos='fade-up' styleIcon={'w-[20px] h-[2olx]'} style={'mt-[32px] bg-[#3671E9] text-white rounded-full'} text={'Try for FREE'} icon={ArrowRight} />
          </div>  
          <div className='relative w-[50vw] h-max flex justify-center items-center lg:w-[50vw]'>
            <img data-aos='fade-up' src={BgHero} alt='bg-hero' className='lg:w-[85%] lg:flex hidden mt-[-40px] z-[2]' />
            <img src={WhiteOrnamentLeft} alt='ornament' className='absolute bottom-[-50px] w-[90%] right-0' />
            <img src={WhiteOrnamentRight} alt='ornament' className='absolute bottom-[-250px] w-[100%] left-[-350px]' />
          </div>
        </div>
    </div>
  )
}

export default Hero
