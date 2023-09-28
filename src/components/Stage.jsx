import React from "react";
import Task from "./Task";
import { PiDotsThreeBold } from "react-icons/pi";
function Stage({ stageName, tasks }) {
  return (
    <div className="2xl:flex-initial flex-1 ">
      <div className="bg-[#e3e4e6] p-3 rounded-md min-w-[320px]">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold text-gray-700">{stageName}</h1>
          <PiDotsThreeBold size={20} />
        </div>
        {tasks?.map((task, index) => {
          return <Task key={index} task={task} />;
        })}

        <p className="text-md text-gray-500 font-semibold cursor-pointer mt-2">
          Add a card...
        </p>
      </div>
    </div>
  );
}

export default Stage;
