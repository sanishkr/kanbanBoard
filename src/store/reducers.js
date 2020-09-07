import { combineReducers } from "redux";
import { actions } from "./actions";

const initialState = {
  data: {
    todo: [
      {
        id: 1,
        description: "Todo Task #1",
        assignee: 1,
        dueDate: "2020-08-19",
        state: "Planned"
      }
    ],
    members: [
      {
        id: 1,
        name: "Jane"
      },
      {
        id: 2,
        name: "Jenny"
      },
      {
        id: 3,
        name: "John"
      }
    ]
  },
  error: {}
};

const todoReducer = (state = initialState, action) => {
  // console.log({ action });
  // debugger;
  switch (action.type) {
    case actions.TODO:
      // console.log({ payload: action.payload, state });
      return Object.assign({}, state, {
        ...action.payload
      });
    case actions.ADD_TODO:
      return Object.assign({}, state, {
        ...state.data,
        data: {
          todo: [...state.data.todo, action.payload],
          members: state.data.members
        }
      });
    case actions.EDIT_TODO:
      // console.log({ payload: action.payload, state });
      const todos = state.data.todo;
      let filteredtodos = todos.filter(t => t.id !== action.payload.id)
      const newtodos = [...filteredtodos, action.payload];
      return Object.assign({}, state, {
        ...state.data,
        data: {
          todo: newtodos,
          members: state.data.members
        }
      });
    default:
      return state;
  }
};

// const memberReducer = (state = initialState, action) => {
//   // console.log({ action });
//   // debugger;
//   switch (action.type) {
//     case actions.MEMBERS:
//       // console.log({ payload: action.payload, state });
//       return Object.assign({}, state, {
//         ...action.payload
//       });
//     default:
//       return state;
//   }
// };

export default combineReducers({
  todoReducer,
  // memberReducer
});
