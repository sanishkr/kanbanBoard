// import { getTodos } from "./api";

const actions = {
  TODO: "TODO",
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  MEMBERS: "MEMBERS"
};

const actionCreators = {
  getTodo: () => ({
    type: actions.TODO
    // payload: getTodos()
  }),
  addTodo: (props) => ({
    type: actions.ADD_TODO,
    payload: props
  }),
  editTodo: (props) => ({
    type: actions.EDIT_TODO,
    payload: props
  }),
  getMembers: () => ({
    type: actions.MEMBERS
    // payload
  })
};

export { actions, actionCreators };
