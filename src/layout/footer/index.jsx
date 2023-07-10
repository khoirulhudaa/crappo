import React from 'react'
import { Footer1, Footer2, Footer3, Logo, Sosmed1, Sosmed2, Sosmed3, Sosmed4, Sosmed5 } from '../../assets'

const Footer = () => {
  return (
    <div className='w-screen bg-[#0D0D2B] h-max px-[20px] lg:px-[40px] py-[20px] lg:py-[60px]'>
        <div className='w-full px-[0px] lg:px-[100px] lg:flex'>
          <div className='w-[100vw] lg:w-[25%] mb-[40px] lg:mb-[0] flex lg:justify-start lg:items-start'><img src={Logo} alt='logo-icon' /></div>
          <div className='w-[100vw] lg:w-[25%] mb-[40px] lg:mb-[0] flex-col flex lg:justify-start lg:items-start'>
            <h3 className='text-white font-bold mb-4 text-[20px]'>Quick Link</h3>
            <ul>
              <li className='text-slate-200 text-[14px] mb-4'>
                Home
              </li>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Product
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  About
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Features
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Contact
                </li>
              </a>
            </ul>
          </div>
          <div className='w-[100%] lg:w-[25%] mb-[40px] lg:mb-[0] flex-col flex justify-start items-start'>
          <h3 className='text-white font-bold mb-4 text-[20px]'>Resources</h3>
            <ul>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Download Whitepapper
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Smart Token
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Blockchain Explorer
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Crypto API
                </li>
              </a>
              <a href="">
                <li className='hover:brightness-[80%] text-slate-200 text-[14px] mb-4 cursor-pointer'>
                  Interest
                </li>
              </a>
            </ul>
          </div>
          <div className='w-[100%] lg:w-[25%] mb-[40px] lg:mb-[0] flex-col flex justify-start items-start'>
            <h2 className='font-bold text-white text-[26px] leading-[1.5em] mb-[30px]'>We accept following payment systems</h2>
            <div className='flex items-center my-[20px]'>
              <div className='bg-[#E0E0E0] flex items-center w-[31%] lg:w-[32%] h-[40px] bg-opacity-[0.3] cursor-pointer hover:brightness-[80%] justify-center w-max mr-3 rounded-lg px-[20px] py-[5px]'>
                <img src={Footer1} alt="img-footer" className='w-[70%]' />
              </div>
              <div className='bg-[#E0E0E0] flex items-center w-[31%] lg:w-[32%] h-[40px] bg-opacity-[0.3] cursor-pointer hover:brightness-[80%] justify-center w-max mx-3 rounded-lg px-[20px] py-[5px]'>
                <img src={Footer2} alt="img-footer" className='w-[70%]' />
              </div>
              <div className='bg-[#E0E0E0] flex items-center w-[31%] lg:w-[32%] h-[40px] bg-opacity-[0.3] cursor-pointer hover:brightness-[80%] justify-center w-max mx-3 rounded-lg px-[20px] py-[5px]'>
                <img src={Footer3} alt="img-footer" className='w-[70%]' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-max px-[0px] lg:px-[100px] pt-[100px] lg:flex lg:flex-row flex-col text-center items-center justify-center lg:justify-between'>
          <small className='text-slate-200'>©2021 CRAPPO. All rights reserved</small>
          <div className='flex lg:justify-end justify-between items-center lg:mt-[0] mt-[30px]'>
            <img src={Sosmed1} alt="icon-sosmed-footer" className='mx-4 lg:ml-5' />
            <img src={Sosmed2} alt="icon-sosmed-footer" className='mx-4 lg:ml-5' />
            <img src={Sosmed3} alt="icon-sosmed-footer" className='mx-4 lg:ml-5' />
            <img src={Sosmed4} alt="icon-sosmed-footer" className='mx-4 lg:ml-5' />
            <img src={Sosmed5} alt="icon-sosmed-footer" className='mx-4 lg:ml-5' />
          </div>
        </div>
    </div>
  )
}

export default Footer
