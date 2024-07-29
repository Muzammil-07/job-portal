import React from 'react'
import { BsChatLeftTextFill,BsFillBellFill , BsPersonFill } from "react-icons/bs";
const Header = () => {
  return (
    <div>
        <div className=' grid grid-cols-[1fr_4fr_3fr] h-[60px] items-end px-6 py-2 border-b-2 ' >
            <h1>Logo</h1>
            <div className='flex gap-8'>
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
            <div><button>Employer/Job Post</button></div>
         </div>
      
        </div>
    </div>
  )
}

export default Header