import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../context/TaskContext";

export function useTasks() {
    return useContext(TasksContext);
  }
  
  export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
  }
