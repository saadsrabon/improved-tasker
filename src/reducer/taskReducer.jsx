export function taskRducer(state, action) {
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
} // Path: src/reducer/filterReducer.jsx