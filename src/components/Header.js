import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { BsChatLeftTextFill, BsFillBellFill, BsPersonFill } from 'react-icons/bs';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';
const Header = () => {
  const [myToken, setMyToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = cookie.get('token');
    setMyToken(token);
  }, []);

  const goJob = () => {
    const token = cookie.get('token');
    if (token) {
      router.push('/jobpost');
    } else {
      alert('Please log in first.');
    }
  };

  const logout = () => {
    cookie.remove('token');
    router.reload(router.pathname);
  };

  return (
    <div className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between h-[60px] px-4 md:px-6 lg:px-8">
        <div>
          <Image src={logo} height={40} width={100} className="object-contain w-[150px] sm:w-[200px]" />
        </div>
        <div className="hidden md:flex gap-8 px-4 lg:px-8">
          <Link href="/dashboard">Home</Link>
          <Link href="/">Company Reviews</Link>
        </div>
        <div className="flex gap-4 md:gap-8 text-xl items-center justify-end">
          <span className="hidden md:block">
            <BsChatLeftTextFill />
          </span>
          <span className="hidden md:block">
            <BsFillBellFill />
          </span>
          <span >
          
          </span>
          <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-button-dark">
      <BsPersonFill  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > <Link href="/profile">Profile </Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"> <Link href="/applied-jobs">Applied Jobs</Link> </Dropdown.Item>
        <Dropdown.Item href="#/action-3"><Link href="/saved-jobs">Saved jobs</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          {myToken ? (
            <button className="text-sm md:text-md" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="text-sm md:text-md">Login</button>
            </Link>
          )}
          <button className="text-xs md:text-sm lg:text-md" onClick={goJob}>
            Employer/Job Post
          </button>
        </div>
      </div>
      <div className="flex md:hidden gap-4 justify-center py-2 bg-gray-100">
        <Link href="/dashboard">Home</Link>
        <Link href="/">Company Reviews</Link>
        <span>
          <BsChatLeftTextFill />
        </span>
        <span>
          <BsFillBellFill />
        </span>
      </div>
    </div>
  );
};

export default Header;
