import React from "react";
import { BsTextLeft, BsLink45Deg } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { LuTimer } from "react-icons/lu";
function Task({ task }) {
  return (
    <div className="bg-white mb-3 rounded-md cursor-pointer">
      {task?.image && (
        <img
          src={task.image}
          alt="image"
          className="h-40 object-cover w-full"
        />
      )}
      <div className="p-2">
        <h1 className="font-medium mb-2">{task?.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 my-2">
            {task?.date && (
              <p className="bg-green-600 py-1 rounded-md px-2 text-white">
                {task.date}
              </p>
            )}
            {task?.deadline && (
              <div className="flex items-center gap-1">
                <LuTimer size={18} />
                {task.deadline}
              </div>
            )}
            {task?.description && <BsTextLeft size={18} />}
            {task?.links?.length > 0 && (
              <div className="flex items-center gap-1">
                <BsLink45Deg size={18} /> {task.links.length}
              </div>
            )}
            {task?.subtask && (
              <div
                className={`flex items-center gap-1 ${
                  task.subtask.completed === task.subtask.total &&
                  "bg-green-600 py-1 rounded-md px-2 text-white"
                }`}
              >
                <BiTask size={18} /> {task.subtask.completed}/
                {task.subtask.total}
              </div>
            )}
          </div>

          {task?.assignedToUser && (
            <img
              className="ml-auto w-9 h-9 rounded-full"
              src={task?.assignedToUser}
              alt="img"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
