
import './App.css';

import { useState } from "react";

import { AiFillFacebook, AiFillCaretUp, AiFillYoutube, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setDarkMode(e.target.checked)
  }
  return (
    <div className={darkMode && 'dark'}>
      <div className="text-slate-500 dark:bg-darkbg-dark">
        {/* header */}
        <div className=" bg-bg pb-40 bg-slate-300 dark:bg-darkbg-dark">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Social Media Dashboard</h1>
              <span className="text-sm">Yotal Followers : 12.3456</span>
            </div>
            <div>
              <label className="mr-2" htmlFor="chechbox" type="checkbox">Dark Mode</label>
              <span>
                <input id="checkbox" type="checkbox" onChange={handleChange} />
              </span>
            </div>
          </div>
        </div>
        <div className='container -mt-40'>
          {/* main cards */}
          <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            <div>
              {/* card 8 */}
              <div className=" card  before:bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
                <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                  <span className="text-facebook">
                    <AiFillFacebook size={22} />
                  </span>
                  <span>@.com</span>
                </div>
                <h2 className="text-slate-800 text-6xl font-bold dark:text-white">5987</h2>
                <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
                <div className=" flex items-center justify-center gap-1 pt-6">
                  <span>
                    <AiFillCaretUp size={22} />
                  </span>
                  <span className='text-sky-500'>Today</span>
                </div>
              </div>
              {/* small cards */}
              <div>
                <h2 className="text-2xl font-bold pt-10 dark:text-white"> Overview - Today </h2>
                <div>
                  {/* card */}
                </div>
              </div>
            </div>


            <div>
              {/* card 8 */}
              <div className=" card  before:bg-gradient-to-r from-rose-600 via-purple-500 to-pink-500">
                <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                  <span className="text-youtube">
                    <AiFillYoutube size={22} />
                  </span>
                  <span>@.com</span>
                </div>
                <h2 className="text-slate-800 text-6xl font-bold dark:text-white">3987</h2>
                <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
                <div className=" flex items-center justify-center gap-1 pt-6">
                  <span>
                    <AiFillCaretUp size={22} />
                  </span>
                  <span className='text-rose-600'>Today</span>
                </div>
              </div>
              {/* small cards */}

            </div>



            <div>
              {/* card 8 */}
              <div className=" card  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                  <span className=" text-rose-400">
                    <AiFillInstagram size={22} />
                  </span>
                  <span>@.com</span>
                </div>
                <h2 className="text-slate-800 text-6xl font-bold dark:text-white">4439</h2>
                <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
                <div className=" flex items-center justify-center gap-1 pt-6">
                  <span>
                    <AiFillCaretUp size={22} />
                  </span>
                  <span className='text-rose-400'>Today</span>
                </div>
              </div>
              {/* small cards */}

            </div>



            <div>
              {/* card 8 */}
              <div className=" card  before:bg-sky-500">
                <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                  <span className=" text-sky-500">
                    <AiFillTwitterCircle size={22} />
                  </span>
                  <span>@.com</span>
                </div>
                <h2 className="text-slate-800 text-6xl font-bold dark:text-white">2439</h2>
                <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
                <div className=" flex items-center justify-center gap-1 pt-6">
                  <span>
                    <AiFillCaretUp size={22} />
                  </span>
                  <span className='text-sky-500'>Today</span>
                </div>
              </div>
              {/* small cards */}

            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-10 pt-8  pb-9"  >
            {Array(8)
              .fill(" ")
              .map((el) => (
                <div className="card-sm">
                  <div className="flex items-center justify-between">
                    <h4 className=" font-bold">Pages Views</h4>
                    <AiFillFacebook className=" text-facebook" size={22} />
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <h3 className=" font-black text-2xl text-slate-800 dark:text-white">
                      {" "}
                      101
                    </h3>
                    <div className="flex items-center gap-1 text-maingreen text-sm">
                      <span>
                        <AiFillCaretUp />
                      </span>
                      <span>300%</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
