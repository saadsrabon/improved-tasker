/* eslint-disable react/prop-types */
import { createContext,  useReducer } from 'react';
import { initialTasks } from '../data/initialTasks';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(state, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
  
      case 'DELETE_TASK':
        return state.filter((task) => task.id !== action.payload);
  
      case 'UPDATE_TASK':
        return state.map((task) => task.id === action.payload.id ? action.payload : task);
      case 'Delete_All':
          return [];
      default:
        return state;
    }
  }
 

