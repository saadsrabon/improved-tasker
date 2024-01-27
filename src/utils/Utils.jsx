import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../context/TaskContext";
import { toast } from "react-toastify";

export function useTasks() {
    return useContext(TasksContext);
  }
  
  export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
  }
  export const notify = () => toast.success('Deleted Successfully', {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true
		});
  export const notifyAdd = () => toast.success('Task Added Successfully', {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true
		});
  export const notifyEdit = () => toast.success('Task Added Successfully', {
		position: "bottom-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true
		});

    export const getNextId = (data) => {
      const maxId = data.reduce((prev, current) =>
          prev && prev.id > current.id ? prev.id : current.id
      );
  
      return maxId + 1;
  };