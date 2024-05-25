import React from "react"
import group from "../images/Group.png"
import menu from "../images/Menu.svg"
import icon1 from "../images/div.svg"
import icon2 from "../images/div2.svg"
import icon3 from "../images/div3.svg"
import icon4 from "../images/div4.svg"
import img from "../images/Screen (replace here).png"
import icon5 from "../images/div5.svg"
import icon6 from "../images/div6.svg"
import icon7 from "../images/div7.svg"
import img1 from "../images/0cc5a830ec062b4b4b507d4582cc8b65.png"
import img2 from "../images/f1cb43207e41fb697d48774e9cfdb820.png"
import img3 from "../images/00c872c24b541c343ea9f2f88caa91eb.png"
import img4 from "../images/Rectangle 4382.png"
import img5 from "../images/Group 2 (1).png"
import img7 from "../images/Frame 1171278769.png"
import img6 from "../images/Rectangle 4383.png"
import icon8 from "../images/div8.svg"
import icon9 from "../images/div9.svg"
import icon10 from "../images/div10.svg"
import icon11 from "../images/div11.svg"
import icon12 from "../images/div12.svg"
import icon13 from "../images/div13.svg"
import ScrollAnimation from 'react-animate-on-scroll';
import img8 from "../images/60e4a1e73807562a93e7fbad_image-testimonial-3-crypto-template.jpg.png"
import img9 from "../images/Image (Replace).png"
import icon14 from "../images/Facebook.svg"
import icon15 from "../images/Instagram.svg"
import icon16 from "../images/LinkedIn.svg"
import icon17 from "../images/Twitter.svg"
import icon18 from "../images/YouTube.svg"

export const Navbar = () => {
  const [responsivenav , setresponsivenav] = React.useState(false)

  const clickicon = () => {
    setresponsivenav(prev => !prev)
  }
    return (<>
      <div className=" header fixed top-0 z-50  flex py-6 bg-[#0C2027] list-none w-full">
                  <div className="me-auto p-2 "><img src={group} alt="traed logo" className="w-[80px]  h-[25px]"/></div>
                  <ul className="list-none list text-[13px] ">
                      <li className="text-white py-3 px-3 me-2 text-center">About</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Our solutions</li>
                      <li className="text-white py-3 px-3 me-2 flex text-center">Sectors <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Knowledge</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Company</li>
                      <li className="text-white py-3 px-2 bg-[#06BA63] me-3 rounded-[10px] flex text-center">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</li>
                  </ul>

                  <div className="flex items-center p-2 img" onClick={clickicon} onScroll={()=>{setresponsivenav(false)}}>
                     <img src={menu} alt="menu"/>
                  </div>



                  <div className={`absolute h-[100vh] w-full ${responsivenav? 'flex' : 'hidden'} flex-row-reverse resnav  top-0 `} onClick={clickicon} >
                    <div className="w-[50%] bg-[#0C2027] relative flex flex-col justify-between sm:p-24 p-4 list-none animate-slidein overflow-auto">
                      <div className="absolute top-0 right-0 p-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" onClick={clickicon} />
</svg>
</div>

                    <li className="text-white py-3 px-3 me-2 text-center">About</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Our solutions</li>
                      <li className="text-white py-3 px-3 me-2 flex justify-center text-center">Sectors <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Knowledge</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Company</li>
                      <li className="text-white py-3 px-2 bg-[#06BA63] me-3 rounded-[10px] flex justify-center text-center">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></li>
                    </div>
                </div>

             </div>
             <div className=" header  opacity-0 top-0  flex py-6 bg-[#0C2027] list-none w-full">
                  <div className="me-auto p-2 "><img src={group} alt="traed logo" className="w-[80px]  h-[25px]"/></div>
                  <ul className="list-none list text-[13px] ">
                      <li className="text-white py-3 px-3 me-2 text-center">About</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Our solutions</li>
                      <li className="text-white py-3 px-3 me-2 flex text-center">Sectors <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Knowledge</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Company</li>
                      <li className="text-white py-3 px-2 bg-[#06BA63] me-3 rounded-[10px] flex text-center">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</li>
                  </ul>

                  <div className="flex items-center p-2 img" onClick={clickicon} onScroll={()=>{setresponsivenav(false)}}>
                     <img src={menu} alt="menu"/>
                  </div>



                  <div className={`absolute h-[100vh] w-full ${responsivenav? 'flex' : 'hidden'} flex-row-reverse resnav  top-0 z-50 `} onClick={clickicon} >
                    <div className="w-[50%] bg-[#0C2027] relative flex flex-col justify-between sm:p-24 p-4 list-none animate-slidein overflow-auto">
                      <div className="absolute top-0 right-0 p-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" onClick={clickicon} />
</svg>
</div>

                    <li className="text-white py-3 px-3 me-2 text-center">About</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Our solutions</li>
                      <li className="text-white py-3 px-3 me-2 flex justify-center text-center">Sectors <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Knowledge</li>
                      <li className="text-white py-3 px-3 me-2 text-center">Company</li>
                      <li className="text-white py-3 px-2 bg-[#06BA63] me-3 rounded-[10px] flex justify-center text-center">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1  w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></li>
                    </div>
                </div>

             </div>
    
    </>)
}

export const Landingpage = () => {
     
      const [firstanimate, setfirstanimate] = React.useState(false)
      const [secondanimate , setsecondanimate] = React.useState(false)
      const [thirdanimate , setthirdanimate ] = React.useState(false)
     
     const timoutid0 = setTimeout(()=> {
      setfirstanimate(true)
      return ()=> clearTimeout(timoutid0)
   },100)
     const timoutid1 = setTimeout(()=> {
        setsecondanimate(true)
        return ()=> clearTimeout(timoutid1)
     },600)

     const timeoutid2 = setTimeout(()=> {
       setthirdanimate(true)
       return () => clearTimeout(timeoutid2)
     }, 1000)
    

     
      return(
          <div className="font-Inter flex flex-col overflow-x-hidden "  >
            
             
              <Navbar/>



             <div className={`h-[89vh] div  w-full `}>
                
              
                
                <div className=" h-full w-full overlay sm:px-20 px-5 ">
                  <div className=" writing h-[100%] justify-center  flex flex-col   ">
                  <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
                    <h1 className={`text-[#0C2027] font-dm-sans font-bold  mainresfont mb-7 ${firstanimate ? 'animate-slideup' : ''} ${!firstanimate ? 'opacity-0': ''} `}>
                    Accounting, but make it easy - withTraed!
                    </h1>
                    </ScrollAnimation>
                   
                    <ScrollAnimation animateIn="fadeInUp" duration={0.5} delay={200}>
                    <p className={`mb-7 sideresfont font-normal ${secondanimate ? 'animate-slideup': ''} ${!secondanimate ? ' opacity-0': ''}`}>Applications that power financial institutions, marketplaces that accelerate industry & an open innovation platform for banks, fintechs & non-banks to connect and collaborate.</p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" duration={0.5} delay={400}>
                    <div className={`flex items-center ${thirdanimate ? 'animate-slideup': ''} ${!thirdanimate ? 'opacity-0': ''}`}>
                        <button  className="bg-[#06BA63] sm:text-[16px] text-[10px] sideresfont text-white flex p-2 rounded-[10px] me-5">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1 sm:pt-1   sm:w-5 sm:h-5 w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>

<p className="font-bold sm:text-[16px] text-[10px] sideresfont" >No credit card necessary. Its free!!</p>
                    </div>

                    </ScrollAnimation>

                </div>
                </div>
               
 
             </div>

             <div className="bg-[#0C2027] sm:p-16 p-10 border-none">

               <div className="w-full text-center flex flex-col justify-center ">
                <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
                <h1 className="text-white  px-14 sm:text-[42px] text-[15px] mb-7 font-medium font-dmSans">Traed helps your business save time every day!</h1>
                </ScrollAnimation>
               
               <ScrollAnimation animateIn="fadeInUp" duration={0.5} delay={200}>
                <p className="text-white sm:text-[17px] text-[10px]">Traed offers a simple and clear accounting software that can be used anywhere at any. This allows a maximum of flexibility and convenience for you and your customers.</p>
                </ScrollAnimation>
                </div>

                <div className="pt-20 section1 w-full">
                    <div className="flex flex-col p-3 ">
                      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                        <div className="p-6 bg-custom-rgba rounded-[40px] mb-7">
                          <div className="relative w-full">
                            <img src={icon1} alt="img" className="w-[58px] h-[58px] mb-5"/>
                             <h1 className="text-white sm:text-[18px] text-[14px] mb-5">INVOICE DISCOUNTING</h1>

                             <p className="sm:text-[14px] text-[10px] text-white">a financing method where a business sells its unpaid invoices to a third party at a discount to access immediate cash flow.</p>


                          </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                        <div className="p-6 bg-custom-rgba rounded-[40px]">
                          <div className="relative w-full">
                            <img src={icon2} alt="img" className="w-[58px] h-[58px] mb-5"/>
                             <h1 className="text-white sm:text-[18px] text-[14px] mb-5">DEALS MANAGING</h1>

                             <p className="sm:text-[14px] text-[10px] text-white">overseeing and optimizing various aspects of business transactions, from negotiation and documentation to tracking and performance analysis.</p>


                          </div>
                        </div>
                        </ScrollAnimation>
                    </div>

                    <div className="p-3  ">
                  <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
                    <div className=" part2  rounded-[40px]  w-full">
                            
                            <div className="h-[100%]  sm:bg-another-rgba rounded-[40px] overflow-hidden">
                              <div className="p-6">
                              <h1 className="text-white sm:text-[18px] text-[14px] mb-5">BUISNESS MATCHMAKING</h1>

                          <p className="sm:text-[14px] text-[10px] text-white pb-7"> a financial arrangement where a buyer facilitates early payments to their suppliers through a third-party financing provider</p>
                              </div>
                   
                              <div className="relative flex div2 w-full ps-6">
                              <div className=" picdiv  rounded-[40px] pt-3 ps-3 bg-another-one ">
                                <img src={img} alt="phone image" className="w-[300px] h-[320px] "/>
                              </div>
                              </div>
                             
                            </div>
                          


                          </div>
                          </ScrollAnimation>

                    </div>

                    <div className="flex flex-col p-3 ">
                      <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                        <div className="p-6 bg-custom-rgba rounded-[40px] mb-7">
                          <div className="relative w-full">
                            <img src={icon3} alt="img" className="w-[58px] h-[58px] mb-5"/>
                             <h1 className="text-white sm:text-[18px] text-[14px] mb-5">FACTORING</h1>

                             <p className="sm:text-[14px] text-[10px] text-white">a financial service that allows businesses to sell their accounts unpaid invoices to a factoring company in exchange for fast cash.</p>


                          </div>
                        </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                        <div className="p-6 bg-custom-rgba rounded-[40px]">
                          <div className="relative w-full">
                            <img src={icon4} alt="img" className="w-[58px] h-[58px] mb-5"/>
                             <h1 className="text-white sm:text-[18px] text-[14px] mb-5">REVERSE FACTORING</h1>

                             <p className="sm:text-[14px] text-[10px] text-white">a financial arrangement where a buyer facilitates early payments to their suppliers through a third-party financing provider</p>


                          </div>
                        </div>
                        </ScrollAnimation>
                        
                    </div>

                </div>

                
              
             </div>

             <div className=" sm:p-16  p-10 bg-[#0C2027]  ">
             <div className="w-full text-center flex flex-col justify-center ">
             <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
                <h1 className="text-white   sm:text-[42px] text-[15px] font-medium font-dmSans">It’s easy. So how is </h1>
                <h1 className="text-white   sm:text-[42px] text-[15px] mb-7 font-medium font-dmSans">that <span className=" text-primary">possible ?</span></h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration={0.5} delay={200}>
                <p className="text-white sm:text-[17px] text-[10px]">Traed offers a simple and clear accounting software that can be used anywhere at any. This allows a maximum of flexibility and convenience for you and your customers.</p>
                </ScrollAnimation>
                </div>

                <div className="py-20 gap-x-3 section1 w-full">
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                  <div className=" bg-custom-rgba p-4 rounded-[24px] mb-4">
                    <img src={img1} alt="image" className="mb-4 w-full h-[150px] "/>
                    <h1 className="text-primary  font-extrabold sm:text-[18px] text-[14px] mb-3">Step 1 - Setup your portal</h1>
                    <p className="sm:text-[14px] text-[10px] text-white">Install or Register web portal of traed.ai by clicking on Get Started button.</p>

                  </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
                  <div className=" bg-custom-rgba p-4 rounded-[24px]  mb-4">
                    <img src={img2} alt="image" className="mb-4 w-full h-[150px] "/>
                    <h1 className="text-primary  font-extrabold sm:text-[18px] text-[14px] mb-3">Step 2 - Upload your legal docs</h1>
                    <p className="sm:text-[14px] text-[10px] text-white">Complete the simple onboarding for your company to get registered on traed.</p>

                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                  <div className=" bg-custom-rgba p-4 rounded-[24px]  mb-4">
                    <img src={img3} alt="image" className="mb-4 w-full h-[150px] "/>
                    <h1 className="text-primary  font-extrabold sm:text-[18px] text-[14px] mb-3"> Step 3 - Onboard and enjoy</h1>
                    <p className="sm:text-[14px] text-[10px] text-white">That’s it!! Start enjoying all features of traed platform to make accounting simple.</p>
                   
                  </div>
                  </ScrollAnimation>
                </div>

                <div className="text-white text-center"><span className="underline">Get Started &gt;&gt;&gt; </span></div>

              
                </div>

                <div className=" sm:px-16 p-10 bg-[#0C2027]  ">
                <div className=" gap-x-10 section1 w-full">
               
                  <div className="flex flex-col  aboutusdiv justify-center">
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}><h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-7 font-dmSans">About Us</h1></ScrollAnimation>  
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}> <p className="sm:text-[14px] text-[10px] text-white">TraedAI is a trade finance platform that leverages cutting-edge AI and machine learning technology to provide innovative solutions to businesses looking to optimize their trade finance processes.</p></ScrollAnimation>
                  </div>
                
                
                
                  <div className="aboutusdiv sm:p-20 p-10">
                    <img src={img4} alt="image" className="w-full"/>
                  </div>
               
                  
                </div>
                </div>

                <div className=" sm:px-16 p-10 bg-[#0C2027]  ">
                 <div className=" gap-x-10 section1 w-full">
                 
                 <div className="aboutusdiv sm:p-20 p-10">
                    <img src={img5} alt="image" className="w-full"/>
                  </div>
                 
  
                
                  <div className="flex flex-col  aboutusdiv justify-center">
                   <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                  <h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-6 font-dmSans">Sell invoices with traed’s solutions</h1>
                  </ScrollAnimation> 
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                  <p className="sm:text-[14px] text-[10px] text-white mb-6">Sell your claims to traed and get your money immediately</p>
                  </ScrollAnimation>
                
                  <ul className="list-none flex flex-col gap-y-4">
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}>  <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon5} alt="img" /> <p>Fast financing solutions </p></li></ScrollAnimation> 
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}><li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon6} alt="img" /> <p>Fast and secure growth for your company </p></li></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}> <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon7} alt="img" /> <p>Create realtime secured deals </p></li></ScrollAnimation> 

                  </ul>
                  </div>
                 </div>

                </div>

                <div className=" sm:px-16 p-10 bg-[#0C2027]  ">
                <div className=" gap-x-10 section1 w-full">
                <div className="flex flex-col  aboutusdiv justify-center">
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>  <h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-6 font-dmSans">Our smart platform is flexible</h1></ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>  <p className="sm:text-[14px] text-[10px] text-white mb-6">Accounting doesn’t has to be that complicated.</p></ScrollAnimation>
                  <ul className="list-none flex flex-col gap-y-4">
                  <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>    <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon8} alt="img" /> <p>Easy handling without previous knowledge</p></li></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>    <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon9} alt="img" /> <p>Access anywhere and anytime </p></li></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>   <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon10} alt="img" /> <p>24/7 Premium Customer Support </p></li></ScrollAnimation>

                  </ul>
                  </div>

                  <div className="aboutusdiv sm:p-20 p-10">
                    <img src={img6} alt="image" className="w-full"/>
                  </div>
                </div>
                </div>

                <div className=" sm:px-16 p-10 bg-[#0C2027]  ">
                <div className=" gap-x-10 section1 w-full">
               

                  <div className="aboutusdiv sm:p-20 p-10">
                    <img src={img7} alt="image" className="w-full"/>
                  </div>

                  <div className="flex flex-col  aboutusdiv justify-center">
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}>   <h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-6 font-dmSans">Why choosing traed for trade managements?</h1></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}>  <p className="sm:text-[14px] text-[10px] text-white mb-6">Create invoices, quotes & co. automatically with your new digital accounting software.</p></ScrollAnimation>
                  <ul className="list-none flex flex-col gap-y-4">
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5}> <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon11} alt="img" /> <p>Save valuable time</p></li> </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5} >  <li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon12} alt="img" /> <p>Keep the overview</p></li></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInRight" duration={0.5} ><li className="flex gap-x-5 items-center text-[14px] text-white"><img src={icon13} alt="img" /> <p>Work flexibly in the cloud </p></li> </ScrollAnimation> 

                  </ul>
                  </div>
                </div>
                </div>

                <div className="sm:px-16 p-10 bg-[#0C2027]">
                  <div className="pt-12 mb-7"><h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-6 font-dmSans">What our users say?</h1></div>
                  <div className=" gap-x-10 section1 w-full">
                    <div className="aboutusdiv mb-6">
                    <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                     <div className="bg-custom-rgba  p-12 text-white rounded-[40px] w-full">
                      <p className="sm:text-[14px] text-[10px] mb-7 text-white">“Traed has been a game-changer for our business. Their factoring services have improved our cash flow, allowing us to focus on growth and expansion. I recommend Traed to any business looking for reliable financial solutions.”</p>
                      <div className="gap-x-4 section1 ">
                        <div className="rounded-full">
                        <img src={img8} alt="img" className="rounded-full"/>
                        </div>

                        <div className="flex flex-col  justify-center">
                          <h1 className="text-white sm:text-[14px] text-[10px] mb-2 font-bold ">JOHN CARTER</h1>
                          <span className="text-white sm:text-[14px] text-[10px] font-light ">ROLE, COMPANY</span>
                        </div>
                        
                      </div>
                     </div>
                     </ScrollAnimation>
                     </div>
                  
                     <div className="aboutusdiv mb-6">
                    <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
                     <div className="bg-custom-rgba p-12  text-white rounded-[40px] ">
                      <p className="sm:text-[14px] text-[10px] mb-7 text-white">“The Traed team's expertise in the industry is evident, and their commitment to our success is unmatched. We're grateful for their support and highly recommend their services.”</p>
                      <div className="gap-x-4 section1 ">
                        <div className="rounded-full">
                        <img src={img8} alt="img" className="rounded-full"/>
                        </div>

                        <div className="flex flex-col  justify-center">
                          <h1 className="text-white sm:text-[14px] text-[10px] mb-2 font-bold ">JOHN CARTER</h1>
                          <span className="text-white sm:text-[14px] text-[10px] font-light ">ROLE, COMPANY</span>
                        </div>
                        
                      </div>
                     </div>
                     </ScrollAnimation>
                     </div>
                  </div>
                </div>


                <div className=" sm:px-16 px-10 sm:py-8 py-10  bg-secondary-accient  ">
                <div className=" gap-x-10 section1 w-full">
               
                  <div className="flex flex-col  aboutusdiv justify-center">
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}><h1 className="text-white   sm:text-[42px] text-[15px] font-bold mb-7 font-dmSans">Explore endless possibilities with Traed.</h1></ScrollAnimation>  
                <ScrollAnimation animateIn="fadeInLeft" duration={0.5}> <p className="sm:text-[14px] text-[10px] mb-7 text-white">Secure your seat today at traed. Enjoy early benifits by joining traed community now. We are providing simple assets solution every successfull company needs.</p></ScrollAnimation>
               <ScrollAnimation animateIn="fadeInLeft" duration={0.5}> <button  className="bg-[#06BA63] sm:text-[16px] text-[10px] sideresfont text-white flex p-2 rounded-[10px] me-5 w-[140px]">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ms-1 sm:pt-1   sm:w-5 sm:h-5 w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></button>
</ScrollAnimation>

                  </div>
                
                
                
                  <div className="aboutusdiv sm:p-20 p-10">
                    <img src={img9} alt="image" className="w-full"/>
                  </div>
               
                  
                </div>
                </div>

                <div className="sm:px-16 p-10 bg-[#0C2027]">
                  <div className="text-white text-center">
                  <ScrollAnimation animateIn="fadeInUp" duration={0.5}> <h1 className="text-white   sm:text-[42px] text-[15px] font-medium font-dmSans mb-7">Frequently Asked Questions</h1></ScrollAnimation> 
                  <ScrollAnimation animateIn="fadeInUp" duration={0.5} delay={20}>  <p className="text-white sm:text-[17px] text-[10px]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p></ScrollAnimation> 
                    </div>

                    <div className="sm:py-20 py-10 flex flex-col w-full gap-y-7 ">
                      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                      <div className=" border border-white flex w-full p-3 ">
                         <p className="text-white text-[14px] font-dmSans font-medium me-auto">How traed helps with invoice for selling goods or services overseas?</p>

                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                      <div className=" border border-white flex w-full p-3 ">
                        <div className="me-auto "> 
                         <p className="text-white text-[14px] font-dmSans font-medium  ">How you can convert your invoices into cash?</p>
                         <ul className="p-3 flex flex-col gap-y-1 text-white list-disc sm:text-[11px] text-[10px]">
                          <li>Register with Traed.ai</li>
                          <li>Introduce your company</li>
                          <li>Add your buyer and get limits</li>
                          <li>Upload invoices</li>
                         </ul>
                         <p className="text-white text-[12px] font-dmSans font-normal  ">Get your cash in 48 hours once your Traed contract and Buyer’s notice are signed</p>
                         </div>
                        
                        <div className="flex flex-col justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
                        </div>
                     


                      </div>
                      </ScrollAnimation>
                       
                      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                      <div className=" border border-white flex w-full p-3 ">
                         <p className="text-white text-[14px] font-dmSans font-medium me-auto">Do you provide ongoing support?</p>

                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
                      <div className=" border border-white flex w-full p-3 ">
                         <p className="text-white text-[14px] font-dmSans font-medium me-auto">What is your web design process?</p>

                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                      </div>
                      </ScrollAnimation>


                      
                    </div>
                </div>

                <div className="sm:px-16 p-10 bg-[#0C2027] flex flex-row flex-wrap justify-between  w-full">
                     <div className="flex flex-col gap-y-6 sm:w-[33%] mb-7 w-[100%]">
                       <img src={group} alt="traed logo" className="w-[80px] h-[25px]" />

                       <p className="text-white text-[12px] font-dmSans font-normal  ">TraedAI is a trade finance platform that  uses AI and machine learning technology to provide innovative solutions to businesses looking to optimize their trade finance processes.</p>

                       <div className="flex flex-row gap-x-2 list-none">
                        <li><img src={icon14} alt="facebook"/></li>
                        <li><img src={icon15} alt="instagram"/></li>
                        <li><img src={icon17} alt="twitter"/></li>
                        <li><img src={icon16} alt="Linkden"/></li>
                        <li><img src={icon18} alt="youtube"/></li>
                       </div>
                      </div>

                      <div className="flex flex-col gap-y-3 text-white text-[14px] sm:items-center items-start list-none sm:w-[33%] w-[50%]">
                        <li>About us</li>
                        <li> Home</li>
                        <li>Product</li>
                        <li>Services</li>
                      </div>

                      <div className="flex flex-col gap-y-3 text-white text-[14px] sm:items-end items-start list-none sm:w-[33%] w-[50%]">
                        <li>Contact us</li>
                        <li>Information</li>
                        <li>Request a quote</li>
                        <li>Consultation</li>
                        <li>Help center</li>
                        <li>Terms and conditions</li>
                      </div>
                  
                </div>

               

          </div>
      )

}




