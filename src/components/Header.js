import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from "../../public/logo.png"
import { BsChatLeftTextFill,BsFillBellFill , BsPersonFill } from "react-icons/bs";
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
const Header = () => {
  const [myToken,setMyToken]=useState(null)
  const router = useRouter()
  useEffect(()=>{
    const token = cookie.get('token');
    setMyToken(token)
  })
  const goJob=()=>{
    const token = cookie.get('token');
    if(token){
    router.push("/jobpost")
    }else{
      alert("login first")
    }
  }
  const logout=()=>{
    cookie.remove('token');
    router.reload(router.pathname)
  }
  return (
    <div>
        <div className=' grid grid-cols-[1fr_4fr_3fr] h-[60px] items-end px-6 py-2 border border-b-2 border-spacing-0 ' >
           <div><Image src={logo} height={100} width={100} className='object-contain w-[200px]'/></div>
            <div className='flex gap-8 px-8'>
                <Link href="/dashboard">Home</Link>
                <Link href="/">Company Reviews</Link>
            </div>
         <div className='flex gap-8 text-xl items-end justify-end'>
            <span>
            <BsChatLeftTextFill />
            </span>
            <span>
            <BsFillBellFill />
            </span>
            <span><BsPersonFill /></span>
            {myToken?<button className='text-md' onClick={logout}>Logout</button> :<Link href="/login"> <button>Login</button></Link>}
           
            <div><button className='text-sm' onClick={goJob}>Employer/Job Post</button></div>
         </div>
      
        </div>
    </div>
  )
}

export default Header