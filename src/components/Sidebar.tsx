import React from "react";
// import {
//   MdHomeFilled,
//   MdOutlineSlowMotionVideo,
//   MdSubscriptions,
//   MdOutlineVideoLibrary,
//   MdHistory,
//   MdOutlineSmartDisplay,
//   MdOutlineWatchLater,
//   MdThumbUpOffAlt,
//   MdSettings,
//   MdOutlinedFlag,
//   MdOutlineHelpOutline,
//   MdOutlineFeedback,
//   MdOutlineSportsVolleyball,
// } from "react-icons/md";
// import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
// import { FaRegCompass } from "react-icons/fa";
// import { GiFilmStrip } from "react-icons/gi";
import {
  helpLinks,
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  textLinks,
} from "../utils/constants";
export default function Sidebar() {
  return (
    <div className="w-2/12 bg-[#212121] lg:pr-3 overflow-auto pb-8 pt-5 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map((mainLink) => {
          return (
            <li
              key={mainLink.name}
              className={`sm:pl-6 pl-2 py-3 hover:bg-zinc-600 ${
                mainLink.name === "Home" ? "bg-slate-600" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5 ">
                <span className="lg:w-3">{mainLink.icon}</span>
                <span className="text-sm tracking-wider hidden lg:block lg:text-[12px] xl:text-sm">
                  {mainLink.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map((secondaryLink) => {
          return (
            <li
              key={secondaryLink.name}
              className={`sm:pl-6 pl-2 py-3 hover:bg-zinc-600 `}
            >
              <a href="#" className="flex items-center gap-5">
                <span className="lg:w-3">{secondaryLink.icon}</span>
                <span className="text-sm  tracking-wider hidden lg:block lg:text-[12px] xl:text-sm">
                  {secondaryLink.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map((subscriptionLink) => {
          return (
            <li
              key={subscriptionLink.name}
              className={`sm:pl-6 pl-2 py-3 hover:bg-zinc-600 `}
            >
              <a href="#" className="flex items-center gap-5">
                <span className="lg:w-3">{subscriptionLink.icon}</span>
                <span className="text-sm  tracking-wider hidden lg:block lg:text-[12px] xl:text-sm">
                  {subscriptionLink.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map((helpLink) => {
          return (
            <li
              key={helpLink.name}
              className={`sm:pl-6 pl-2 py-3 hover:bg-zinc-600 `}
            >
              <a href="#" className="flex items-center gap-5">
                <span className="lg:w-3">{helpLink.icon}</span>
                <span className="text-sm  tracking-wider hidden lg:block lg:text-[12px] xl:text-sm">
                  {helpLink.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return (
            <li
              key={name}
              className="hover:underline cursor-pointer hidden lg:block"
            >
              {name}
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-2 flex-wrap hidden sm:block  text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return (
            <li
              key={name}
              className="hover:underline cursor-pointer hidden lg:block"
            >
              {name}
            </li>
          );
        })}
      </ul>
      <span className="px-4 hidden sm:block text-sm text-zinc-400">
        &copy; 2022 Google
      </span>
      <br />
      <p className="px-4 pt-3 hidden sm:block text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  );
}
