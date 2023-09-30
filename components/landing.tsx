import React from 'react'
import Image from 'next/image'

const Landing = () => {
  return (
    <>
    {/* <div className=" overflow-hidden"> */}
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between mb-10 md:p-20 py-12 px-4 overflow-y-hidden">
        <div className="flex flex-1 justify-start flex-col md:mr-10 mt-[-50]">
          <Image src="/heroimg.png" alt='kfdkf' width={750} height={750} />
          
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10"> 
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                
              <div className=' ml-10 mt-40 button w-32 h-32 bg-blue-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
    border-[1px] border-blue-400
  '>
		<span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Emergeny <br /> Button</span>
	</div>
               
              </div>
             
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            


            
          </div>

        </div>

      </div>
   </div>
   {/* </div> */}
   </>
  )
}

export default Landing