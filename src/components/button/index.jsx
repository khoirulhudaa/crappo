import React from 'react'

const Button = ({
    text,
    type,
    style="",
    icon,
    styleIcon
}) => {
    switch(type) {
        case "with-icon" :
            return (
              <div className={`w-max flex items-center bg-[] justify-center h-max px-[30px] py-[12px] cursor-pointer duration-100 hover:brightness-[88%] active:scale-[0.98] ${style}`}>
                <p className='mr-3'>
                    {text}
                </p>
                <img src={icon} className={`${styleIcon}`} alt='icon-btn' />
              </div>
            )
        case "outline-with-icon" : 
                return (
                <div className={`w-max flex itemss-center justify-center h-max px-[24px] py-[16px] cursor-pointer duration-100 hover:brightness-[88%] active:scale-[0.98] ${style}`}>
                    <p className='mr-3'>
                        {text}
                    </p>
                    <img src={icon} className={`${styleIcon}`} alt='icon-btn' />
                </div>
            )
        case "outline-without-icon" : 
                return (
                <div className={`w-max flex text-center itemss-center justify-center h-max px-[24px] py-[16px] cursor-pointer duration-100 hover:brightness-[88%] active:scale-[0.98] ${style}`}>
                    <p>
                        {text}
                    </p>
                </div>
            )
        case "only-icon" :
            return (
                <div className={`w-[56px] rounded-full text-center flex items-center border border-slate-100 text-white justify-center h-[56px] p-1 cursor-pointer duration-100 hover:brightness-[88%] active:scale-[0.98] ${style}`}>
                   <img src={icon} className={`${styleIcon}`} alt='icon-btn' />
                </div>
            )
        default:
            return (
                <div className={`w-max text-center flex items-center bg-[#3671E9] text-white justify-center h-max px-[28px] py-[12px] cursor-pointer duration-100 hover:brightness-[88%] active:scale-[0.98] ${style}`}>
                <p>
                    {text}
                </p>
              </div>
            )
            
    }
}

export default Button
