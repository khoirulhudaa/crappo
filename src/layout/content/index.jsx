import React, { useEffect } from 'react'
import { ArrowRight, BG2, BG3, BG4, BG5, Chart, Earth, IcCard1, IcCard2, IcCard3, Ornament2, Ornament3, Person } from '../../assets'
import { Button } from '../../components'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Content = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className='w-[100vw] relative py-[10px] lg:py-[80px] h-max block lg:flex lg:item-center lg:justify-center'>
            <div data-aos='fade-up' className='w-[90%] lg:w-[33%] h-max px-2 lg:ml-0 ml-4 lg:mb-0 mb-[24px] py-2 flex items-center lg:justify-center'>
                <div className='bg-white bg-opacity-[10%] rounded-full flex items-center justify-center w-[60px] h-[60px] mr-4'>
                    <img src={Chart} alt='icon' className='w-[40%] h-auto' />
                </div>
                <div className='w-max h-max'>
                    <h2 className='text-white font-bold text-[24px] mb-1'>$30B</h2>
                    <p className='w-max h-max text-slate-200 text-[12px]'>Digital Currency Exchanged</p>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='600' className='w-[90%] lg:w-[33%] h-max px-2 lg:ml-0 ml-4 lg:mb-0 mb-[24px] py-2 flex items-center lg:justify-center'>
                <div className='bg-white bg-opacity-[10%] rounded-full flex items-center justify-center w-[60px] h-[60px] mr-4'>
                    <img src={Person} alt='icon' className='w-[40%] h-auto' />
                </div>
                <div className='w-max h-max'>
                    <h2 className='text-white font-bold text-[24px] mb-1'>$10B</h2>
                    <p className='w-max h-max text-slate-200 text-[12px]'>Trusted Wallets Investor</p>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-duration='700' className='w-[90%] lg:w-[33%] h-max px-2 lg:ml-0 ml-4 lg:mb-0 mb-[24px] py-2 flex items-center lg:justify-center'>
                <div className='bg-white bg-opacity-[10%] rounded-full flex items-center justify-center w-[60px] h-[60px] mr-4'>
                    <img src={Earth} alt='icon' className='w-[40%] h-auto' />
                </div>
                <div className='w-max h-max'>
                    <h2 className='text-white font-bold text-[24px] mb-1'>195</h2>
                    <p className='w-max h-max text-slate-200 text-[12px]'>Countries Supported</p>
                </div>
            </div>
        </section>


        <section className='relative w-[100vw] px-[30px] lg:px-[100px] pt-[80px] lg:pb-[50px] h-max flex lg:items-center'>
            <div className='w-[50vw] h-max hidden lg:flex lg:flex-col items-center'>
                <img src={BG2} data-aos='fade-up' alt="bg-content" className='w-[80%]' />
            </div>
            <div className='relative w-[100vw] lg:w-[50vw] h-max flex flex-col lg:justify-center'>
                <img src={Ornament2} alt="ornament2" className='absolute w-[130px] right-[-40px] top-[-160px]' />
                <img src={Ornament3} alt="ornament3" className='absolute w-[160px] right-[-40px] bottom-[-70px] rotate-[-50deg]' />
                <h2 data-aos='fade-up' className='text-white w-[90vw] lg:w-[100%] font-bold text-[40px] lg:text-[48px]'>Why you should choose CRAPPO</h2>
                <p data-aos='fade-up' data-aos-duration='600'className='w-[90%] lg:w-[65%] font-normal text-slate-200 my-[20px]'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <Button style={'rounded-full mt-3'} text={'Learn More'} />
            </div>
        </section>

        <section className='relative w-screen h-max flex flex-col lg:items-center px-[30px] lg:px-0 lg:justify-center py-[60px] lg:py-[150px]'>
            <h2 data-aos='fade-up' className='text-white font-bold mb-4 text-[40px]'>Check how much you can earn</h2>
            <p data-aos='fade-up' data-aos-duration='600' className='w-[90%] lg:w-[40%] mb-[60px] lg:text-center text-slate-300 leading-[2em]'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
        </section>

        <section className='h-max relative flex items-center justify-center bg-slate-100'>
            <div data-aos='fade-up' className='relative lg:bottom-[140px] shadow-lg w-[100vw] lg:w-[80vw] overflow-hidden bg-white rounded-lg px-8 py-12'>
                <div className='w-full h-max bg-[#FBFCFE] shadw-lg'>
                    <div className='w-full px-2 py-4 flex items-center justify-between'>
                        <input type="text" placeholder='Enter your hash rate' className='w-[40%] text-[14px] outline-0 border-b border-slate-300 py-2' name='input1' />
                        <select className='w-[30%] bg-transparent border-b py-2 outline-0 border-slate-300'>
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Cardano">Cardano</option>
                        </select>
                        <Button text={'Calculate'} style={'rounded-full'} />
                    </div>
                </div>
                <div className='w-full h-max bg-white py-[30px] px-4'>
                    <h3 className='font-bold text-[#3671E9] mb-5'>ESTIMATED 24 HOUR REVENUE:</h3>
                    <h2 className='font-bold text-[#0D0D2B] text-[32px] mb-4'>0.055 130 59 ETH <span className='text-blue-500'>($1275)</span></h2>
                    <p className='w-[85%] lg:w-max h-max text-slate-400 text-[14px]'>Revenue will change based on mining difficulty and Ethereum price.</p>
                </div>
            </div>
        </section>

        <section className='h-max relative pb-[2px] lg:pb-[80px] flex flex-col items-center justify-center bg-slate-100'>
            <h2 data-aos='fade-up' className='text-[#0D0D2B] w-[90vw] lg:w-[50%] mt-[50px] lg:mt-0 text-center ml-auto mr-auto font-bold mb-4 text-[36px] lg:text-[40px]'>Trade securely and market the high growth cryptocurrencies.</h2>
            <div className='w-full lg:flex block lg:items-center justify-center lg:px-[100px] py-[60px]'>
                <div data-aos='fade-up' className='bg-[#2B076E] mx-5 cursor-pointer hover:brightness-[98%] text-center flex-col w-[90vw] lg:w-[33%] h-[400px] shadow-lg px-4 py-[40px] rounded-lg mb-[30px] lg:mb-0 flex items-center'>
                    <img src={IcCard1} alt='icon-card' className='w-[60px] h-[60px] ml-auto mr-auto mb-8' />
                    <h2 className='text-white font-bold text-[28px]'>Bitcoin <sup className='ml-2 text-white text-[12px] text-slate-400 font-bold'>BTC</sup></h2>
                    <p className='w-[80%] text-center mt-8 leading-[2em] text-slate-300'>Digital currency in which a record of transactions is maintained.</p>
                    <Button type={'with-icon'} styleIcon={'w-[20px] h-[20px]'} style={'mt-[32px] bg-[#3671E9] text-white rounded-full'} text={'Try for FREE'} icon={ArrowRight} />
                </div>  
                <div data-aos='fade-up' data-aos-duration='600' className='bg-white mx-5 cursor-pointer hover:brightness-[98%] text-center flex-col w-[90vw] lg:w-[33%] h-[400px] shadow-lg px-4 py-[40px] rounded-lg mb-[30px] lg:mb-0 flex items-center'>
                    <img src={IcCard2} alt='icon-card' className='w-[60px] h-[60px] ml-auto mr-auto mb-8' />
                    <h2 className='text-[#0D0D2B] font-bold text-[28px]'>Ethereum <sup className='ml-2 text-white text-[12px] text-slate-400 font-bold'>ETH</sup></h2>
                    <p className='w-[80%] text-center mt-8 leading-[2em] text-[#828282]'>Digital currency in which a record of transactions is maintained.</p>
                    <Button type={'only-icon'} styleIcon={'w-[70px] h-[70px]'} style={'mt-[32px] text-white rounded-full'} icon={ArrowRight} />
                </div>  
                <div data-aos='fade-up' data-aos-duration='700' className='bg-white mx-5 cursor-pointer hover:brightness-[98%] text-center flex-col w-[90vw] lg:w-[33%] h-[400px] shadow-lg px-4 py-[40px] rounded-lg mb-[30px] lg:mb-0 flex items-center'>
                    <img src={IcCard3} alt='icon-card' className='w-[60px] h-[60px] ml-auto mr-auto mb-8' />
                    <h2 className='text-[#0D0D2B] font-bold text-[28px]'>Litecoin <sup className='ml-2 text-white text-[12px] text-slate-400 font-bold'>LTC</sup></h2>
                    <p className='w-[80%] text-center mt-8 leading-[2em] text-[#828282]'>Digital currency in which a record of transactions is maintained.</p>
                    <Button type={'only-icon'} styleIcon={'w-[70px] h-[70px]'} style={'mt-[32px] text-white rounded-full'} icon={ArrowRight} />
                </div>
            </div>
        </section>

        <section className='relative w-screen h-max overflow-hidden bg-[#2B076E] py-[80px]'>
            <div className='absolute left-[10%] top-[-300px] bg-white bg-opacity-[0.1] rounded-full w-[460px] h-[460px]'></div>
            <h2 data-aos='fade-up' className='text-[36px] lg:text-[40px] w-[90%] lg:w-[60%] ml-auto mr-auto text-center text-white font-bold leading-[1.5em] mb-8'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
            <div className='fblock lg:lex items-center w-[80vw] ml-auto mr-auto py-[20px] lg:py-[40px] my-[80px]'>
                <div data-aos='fade-up' data-aos-duration='600' className='w-[100vw] lg:w-[50%]'>
                    <h3 className='text-white font-bold leading-[1.5em] text-[30px] mb-[20px]'>Invest Smart</h3>
                    <p className='w-[70%] leading-[1.5em] text-slate-300'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                    <Button text={'Learn More'} style={'rounded-full mt-6'} />
                </div>
                <div data-aos='fade-up' data-aos-duration='600' className='w-[100vw] lg:w-[50%] flex mt-[30px] lg:mt-0 items-center lg:justify-center'>
                    <img src={BG3} alt='img' className='w-[80%] lg:w-max' />
                </div>
            </div>
            <div className='block lg:flex items-center w-[80vw] ml-auto mr-auto py-[40px] my-[80px]'>
                <div data-aos='fade-up' data-aos-duration='600' className='w-[100vw] mb-[30px] lg:mb-0 lg:w-[50%]'>
                    <img src={BG4} alt='img' className='w-[80%] lg:w-max' />
                </div>
                <div data-aos='fade-up' className='w-[100vw] lg:w-[50%] lg:pl-[100px]'>
                    <h3 className='text-white font-bold leading-[1.5em] text-[30px] mb-[20px]'>Invest Smart</h3>
                    <p className='w-[80%] leading-[1.5em] text-slate-300'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                    <Button text={'Learn More'} style={'rounded-full mt-6'} />
                </div>
            </div>
            <div className='block lg:flex items-center w-[80vw] ml-auto mr-auto py-[40px] my-[80px]'>
                <div data-aos='fade-up' className='w-[100vw] lg:w-[50%]'>
                    <h3 className='text-white font-bold leading-[1.5em] text-[30px] mb-[20px]'>Invest Smart</h3>
                    <p className='w-[70%] leading-[1.5em] text-slate-300'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                    <Button text={'Learn More'} style={'rounded-full mt-6'} />
                </div>
                <div data-aos='fade-up' data-aos-duration='600' className='w-[100vw] lg:w-[50%] flex lg:items-center lg:justify-center'>
                    <img src={BG5} alt='img' className='w-[90%] lg:w-max mt-[30px] relative right-[40px] lg:right-0 lg:mt-0' />
                </div>
            </div>

            <div data-aos='fade-up' className='z-[4] mt-[30px] lg:mt-[140px] relative w-[90vw] lg:w-[80vw] ml-auto mr-auto lg:flex items-center justify-between rounded-lg px-[40px] py-[60px] shadow-lg bg-[#3671E9]'>
                <div className='w-[100%] lg:w-[50%]'>
                    <h2 className='text-[30px] mb-4 text-white font-bold'>Start mining now</h2>
                    <p className='text-[14px] w-[75%] leadong-[1.5em] text-slate-300'>Join now with CRAPPO to get the latest news and start mining now</p>
                </div>
                <div className='w-[100%] lg:w-[50%] mt-[20px] lg:mt-0 lg:flex items-center justify-end'>
                    <input type="text" placeholder='Enter your email' className='placeholder-white w-[90%] lg:w-[70%] bg-transparent text-white text-[14px] outline-0 border-b border-slate-300 py-2' name='input1' />
                    <div className='font-bold text-[#0D0D2B] w-[100%] lg:w-max h-max text-[14px] px-[20px] py-[15px] bg-white rounded-full lg:ml-8 mt-[20px] lg:mt-[0] cursor-pointer hover:brightness-[88%] active:scale-[0.98]'>
                        Subscribe
                    </div>
                </div>
            </div>

            <div className='w-screen absolute bottom-0 left-0 h-[400px] bg-gradient-to-b from-[#2B076E] to-[#0D0D2B]'></div>

        </section>
    </>
  )
}

export default Content
