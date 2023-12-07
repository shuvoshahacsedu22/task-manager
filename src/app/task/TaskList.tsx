"use client";
import React, { useState } from "react";
import { Task } from "./types";

interface Props {
  tasks: Task[];
  deleteTask: Function;
  setCurrentTaskId: Function;
  setShowModal: Function;
}

const TaskList = ({
  tasks,
  deleteTask,
  setCurrentTaskId,
  setShowModal,
}: Props) => {
  const [status, setStatus] = useState<string>("All");
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 rounded-md p-4">
      <div className="mb-2">
        <label htmlFor="options" className="block text-gray-700 font-bold mb-2">
          Filter By:
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          id="options"
          name="options"
          className="w-full p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <table className="min-w-full bg-white rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Task ID</th>
            <th className="py-3 px-6 text-left">Task Title</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            task.status==status || status=='All'?
            <tr
              key={task._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{task._id}</td>
              <td className="py-3 px-6">{task.title}</td>
              <td className="py-3 px-6">{task.description}</td>
              <td className="py-3 px-6">{task.status}</td>
              <td className="py-3 px-6">
                <button
                  onClick={() => {
                    setCurrentTaskId(index);
                    setShowModal(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task)}
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>:null
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
