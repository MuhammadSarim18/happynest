import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"
import logo from "../src/assets/happynest2.png"
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    // <div className="">
    //   <header className='bg-white fixed z-40 left-0 border-b shadow-sm w-full top-0 flex justify-between lg:px-24 lg:py-4 md:px-7 md:py-3 sm:px-4'>
    //     <Link to={'/'} className="flex items-center gap-1">
    //       <img src={logo} alt="" className="w-14 h-14" />

    //       <span className='lg:font-bold lg:block lg:text-xl md:hidden sm:hidden'>HAPPYNEST</span>
    //     </Link>
    //     <div className='flex gap-4 border border-gray-300 rounded-full px-7 cursor-pointer shadow-lg py-3  hover:shadow-md hover:shadow-bghover-500/40 sm:hidden'>
    //       <div>Anywhere</div>
    //       <div className="border-l border-gray-10"></div>
    //       <div>Any week</div>
    //       <div className="border-l border-gray-10"></div>
    //       <div>Add guests</div>
    //       <button className='bg-primary text-white p-2 rounded-full'>
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <Link to={user ? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 hover:shadow-md hover:shadow-bghover-500/40'>
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //       </svg>

    //       <div className='bg-gray-500 text-white rounded-full border
    //        border-gray-500 overflow-hidden'>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
    //           <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    //         </svg>
    //       </div>

    //       {!!user && (
    //         <div>
    //           {user.name}
    //         </div>
    //       )}
    //     </Link>
    //   </header >
    // </div>

    <div className="">
      <header className='bg-white fixed z-40 left-0 border-b shadow-sm w-full top-0 flex justify-between py-3 lg:px-24 lg:py-4 md:px-7 md:py-3 px-4'>
        <Link to={'/'} className="flex items-center gap-1">
          <img src={logo} alt="" className="w-14 h-14" />
          <span className='lg:font-bold lg:block lg:text-xl md:hidden hidden'>HAPPYNEST</span>
        </Link>
        <div className='lg:flex lg:gap-4 lg:border lg:border-gray-300 lg:rounded-full lg:px-7 lg:cursor-pointer lg:shadow-lg lg:py-3 md:hidden hidden'>
          <div>Anywhere</div>
          <div className="border-l border-gray-10"></div>
          <div>Any week</div>
          <div className="border-l border-gray-10"></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <Link to={user ? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 lg:hover:shadow-md lg:hover:shadow-bghover-500/40'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          {!!user && (
            <div>
              {user.name}
            </div>
          )}
        </Link>
      </header >
    </div>


  )
}