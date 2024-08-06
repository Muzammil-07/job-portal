import React from 'react'
import Image from 'next/image';
import logo from "../../public/logo.png"
import { BsChatLeftTextFill,BsFillBellFill , BsPersonFill } from "react-icons/bs";
const Header = () => {
  return (
    <div>
        <div className=' grid grid-cols-[1fr_4fr_3fr] h-[60px] items-end px-6 py-2 border border-b-2 border-spacing-0 ' >
           <div><Image src={logo} height={100} width={100} className='object-contain w-[200px]'/></div>
            <div className='flex gap-8 px-8'>
                <button>Home</button>
                <button>Company Reviews</button>
            </div>
         <div className='flex gap-8 text-xl items-end justify-end'>
            <span>
            <BsChatLeftTextFill />
            </span>
            <span>
            <BsFillBellFill />
            </span>
            <span><BsPersonFill /></span>
            <div><button className='text-sm'>Employer/Job Post</button></div>
         </div>
      
        </div>
    </div>
  )
}

export default Header