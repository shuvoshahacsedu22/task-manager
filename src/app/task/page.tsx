"use client";//in app based nextjs this is used to differentiate a client component from server component
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";
import TaskFormModal from "./TaskFormModal";
import TaskForm from "./TaskFormModal";
import TaskList from "./TaskList";
import { Task } from "./types";

 const TaskPage=()=> {
  const [showModal, setShowModal] = useState(false);
  const [currentTaskId,setCurrentTaskId] = useState<number>(-1);
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "task 1",
    description: "task descripton 1",
    status: "In Progress",
  },{
    id: 2,
    title: "task 2",
    description: "task descripton 2",
    status: "To Do",
  }]);
  const addTask = (task: Task) => {
    
    axios
      .post(process.env.NEXT_PUBLIC_API_END_POINT+'/task')
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error("Error adding task", error);
      });
  };
  const deleteTask = () => {
    alert("deleting task");
  };
  const updateTask = (task: Task) => {
    alert("updating task");
  };
  useEffect(() => {
    axios
      .get('https://task-manager-backend-service-9irr.onrender.com/task')
      .then((response) => {
        console.log(response);
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks", error);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            My Tasks
          <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        setCurrentTaskId={setCurrentTaskId}
        setShowModal={setShowModal}
      ></TaskList>
      <div className="p-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Task
        </button>
        <TaskFormModal 
        task={currentTaskId>=0?tasks[currentTaskId]:{id:'',title:'',status:'',description:''}} 
        addTask={addTask} updateTask={updateTask} showModal={showModal} setShowModal={setShowModal} setCurrentTaskId={setCurrentTaskId} />
      </div>

      <Link href="/" 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Back</Link>
    </main>
  );
}
export default TaskPage;