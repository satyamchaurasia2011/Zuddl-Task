import React from "react";
import Task from "./Task";
import { PiDotsThreeBold } from "react-icons/pi";
function Stage({ stageName, tasks }) {
  return (
    <div className="2xl:flex-initial flex-1 bg-[#e3e4e6] p-3  rounded-md min-w-[320px]">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-gray-700">{stageName}</h1>
        <PiDotsThreeBold size={20} />
      </div>
      <div className=" h-[80vh] overflow-x-hidden overflow-y-auto">
        {tasks?.map((task, index) => {
          return <Task key={index} task={task} />;
        })}
      </div>
      <p className="text-md text-gray-500 font-semibold cursor-pointer mt-2">
        Add a card...
      </p>
    </div>
  );
}

export default Stage;
