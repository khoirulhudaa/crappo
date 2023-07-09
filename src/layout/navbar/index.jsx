import React, { useState } from 'react'
import { Logo } from '../../assets'
import { Button } from '../../components'

const Navbar = () => {

  const [activeSidebare, setActiveSidebare] = useState(false);

  const handleSidebare = (e) => {
    e.preventDefault()
    setActiveSidebare(!activeSidebare)
  }

  return (
    <div className='w-screen overflow-hidden z-[9999] bg-[#0D0D2B] h-[50px] px-[20px] lg:px-[100px] py-[60px] relative flex items-center justify-between'>
        
        {/* Sidebare on mobile device */}
        <div className={`w-[80vw] h-[100vh] z-[44] bg-white shadow-lg flex flex-col p-7 ${activeSidebare ? 'left-0 duration-[0.7s]' : 'left-[-100%] duration-[0.7s]'} fixed top-0`}>
          <div className='w-max flex flex-col'>
              <ul className='flex flex-col list-none text-white mt-[30px]'>
                  <li className='font-normal text-black hover:brightness-[88%] text-[20px] mb-[34px]'>
                    <a href="#">
                      Products
                    </a>
                  </li>
                  <li className='font-normal text-black hover:brightness-[88%] text-[20px] mb-[34px]'>
                    <a href="#">
                      Features
                    </a>
                  </li>
                  <li className='font-normal text-black hover:brightness-[88%] text-[20px] mb-[34px]'>
                    <a href="#">
                      About
                    </a>
                  </li>
                  <li className='font-normal text-black hover:brightness-[88%] text-[20px] mb-[34px]'>
                    <a href="#">
                      Contact
                    </a>
                  </li>
              </ul>
              <div className='flex flex-col'>
                  <Button text={"Login"} style={`rounded-full bg-[#3671E9]]`} />
                  <Button text={"Register"} style={`rounded-full bg-[#3671E9]] mt-5`} />
              </div>
          </div>
        </div>

        <img src={Logo} />
        <div className='w-max lg:flex items-center hidden'>
            <ul className='flex items-center list-none text-white'>
                <li className='font-normal hover:brightness-[88%] mr-12'>
                  <a href="#">
                    Products
                  </a>
                </li>
                <li className='font-normal hover:brightness-[88%] mr-12'>
                  <a href="#">
                    Features
                  </a>
                </li>
                <li className='font-normal hover:brightness-[88%] mr-12'>
                  <a href="#">
                    About
                  </a>
                </li>
                <li className='font-normal hover:brightness-[88%] mr-12'>
                  <a href="#">
                    Contact
                  </a>
                </li>
            </ul>
            <div className='flex items-center'>
                <Button text={"Login"} type={"outline-without-icon"} style='text-white' />
                <span className='mr-6 bg-white w-[1px] h-[20px]'>
                </span>
                <Button text={"Register"} style={`rounded-full bg-[#3671E9]]`} /> 
            </div>
        </div>
        <div onClick={(e) => handleSidebare(e)} className='lg:hidden flex flex-col cursor-pointer hover:brightness-[80%] active:scale-[0.98]'>
          <div className='w-[38px] h-[4px] bg-white mb-2 rounded-full'></div>
          <div className='w-[38px] h-[4px] bg-white mb-2 rounded-full'></div>
          <div className='w-[38px] h-[4px] bg-white mb-2 rounded-full'></div>
        </div>
    </div>
  )
}

export default Navbar
