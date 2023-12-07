"use client";
import React, { useState } from "react";
import { Task } from "./types";
interface Props {
  task: Task;
  addTask: Function;
  updateTask: Function;
  showModal: Boolean;
  setShowModal: Function;
  setCurrentTaskId: Function;
}
const TaskFormModal = ({
  showModal,
  setShowModal,
  addTask,
  setCurrentTaskId,
  updateTask,
  task,
}: Props) => {
  const [title, setTitle] = useState(task.title ? task.title : "");
  const [description, setDescription] = useState(
    task.description ? task.description : ""
  );
  const [status, setStatus] = useState(task.status ? task.status : "");

  const closeModal = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
    setStatus("");
    setCurrentTaskId(-1);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) return; // Basic form validation
    if (task._id) updateTask({ id: task._id, title, description, status });
    else addTask({ title, description, status });
    setCurrentTaskId(-1);
    setTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <form
            className="max-w-md mx-auto bg-gray-100 p-6 rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="taskTitle"
                className="block text-gray-700 font-bold mb-2"
              >
                Task Title:
              </label>
              <input
                type="text"
                id="taskTitle"
                value={title || task.title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                name="taskTitle"
                className="w-full p-2 border rounded-md"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="taskDescription"
                className="block text-gray-700 font-bold mb-2"
              >
                Task Description:
              </label>
              <textarea
                value={description || task.description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                id="taskDescription"
                name="taskDescription"
                className="w-full p-2 border rounded-md"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="options"
                className="block text-gray-700 font-bold mb-2"
              >
                Options:
              </label>
              <select
                value={status || task.status}
                onChange={(e) => setStatus(e.target.value)}
                id="options"
                name="options"
                className="w-full p-2 border rounded-md"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-700 text-gray-700 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default TaskFormModal;
