import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";
import logo from "../assets/happynest2.png";
import login from "../assets/login.png";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div >
    {/* <div className="flex justify-between md:mt-28 "> */}
      {/* <div className="bg-gray-200 rounded-l-3xl p-14">
        <img src={login} alt="" className="h-96 w-96 object-cover aspect-square" />
      </div> */}
      <div className="lg:flex lg:justify-center lg:items-center mt-44 p-4">
        {/* <img src={logo} alt="" className="w-14 h-14 ml-28" /> */}
        {/* <div className="text-center mb-5">
          <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
          <p>Enter your information to login</p>
        </div> */}
        <form onSubmit={handleLoginSubmit}>
          <input type="email"
            className="mb-4"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            className="mb-4"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} />


          {/* <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mdi mdi-email-outline text-gray-400 text-lg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                </div>
                <input
                  type="email"
                  placeholder="johnsmith@example.com"
                  value={email}
                  onChange={ev => setEmail(ev.target.value)} />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-8">
              <label className="text-xs font-semibold px-1">Password</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mdi mdi-lock-outline text-gray-400 text-lg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>

                </div>
                <input
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={ev => setPassword(ev.target.value)} />
              </div>
            </div>
          </div> */}
          <div className="flex items-center justify-center">
            <div className="w-full">
              <button
                className="w-full block  bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                LOGIN
              </button>
            </div>
          </div>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>


  );
}