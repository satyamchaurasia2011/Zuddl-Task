import React from "react";
import { AiOutlineStar, AiOutlineTeam } from "react-icons/ai";
import { GiFoxHead } from "react-icons/gi";
import {PiDotsThreeBold} from "react-icons/pi"
function Header() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold mr-3">Taco's Tacos</h1>
          <AiOutlineStar size={20} />
          <div className="h-6 bg-white w-[0.2px] opacity-50"></div>
        </div>
        <div className="flex items-center gap-2">
          <GiFoxHead size={20} />
          <h1 className="text-xl font-semibold">Taco & Co.</h1>
          <p className="text-sm ml-3 py-[2px] px-2 rounded-lg border font-semibold bg-opacity-20 bg-white mr-3">
            Free
          </p>
          <div className="h-6 bg-white w-[0.2px] opacity-50"></div>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineTeam size={20} />
          <h1 className="text-xl font-semibold">Team Visible</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <PiDotsThreeBold size={20} />
        <h1 className="text-lg underline cursor-pointer">Show Menu</h1>
      </div>
    </nav>
  );
}

export default Header;
