import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center px-6 sm:px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-4 sm:gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu className="hidden sm:block" />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium sm:first-letter sm:mr-2 sm:block hidden">
              YouTube
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex ml-2 sm:ml-0 bg-zinc-900 items-center h-10 sm:px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl hidden sm:block" />
              </div>
              <input
                type="text"
                className="lg:w-96 sm:w-52 w-10 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 -ml-5 sm:-ml-0 bg-zinc-900 rounded-full ">
          <TiMicrophone />
        </div>
      </div>
      <div className=" gap-5 items-center text-xl flex">
        <BsCameraVideo className="hidden sm:block" />
        <IoAppsSharp className="hidden sm:block" />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/114101461?v=4"
          className="w-9 h-9 rounded-full "
          alt="logo"
        />
      </div>
    </div>
  );
}
