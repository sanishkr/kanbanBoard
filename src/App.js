import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actionCreators } from "./store/actions";
import Header from "./components/Header";
import Kanban from "./components/Kanban";

import "./styles.css";

function App({ todosData, getTodo, ...props }) {
  useEffect(() => {
    getTodo();
  }, []);
  // console.log({ todosData });
  const { todo, members } = todosData;
  return (
    <div className="App">
      <Header members={members} />
      <Kanban
        members={members}
        tasks={todo}
        addTodocb={props.addTodo}
        editTodocb={props.editTodo}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todosData: state.todoReducer.data
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTodo: actionCreators.getTodo,
      addTodo: actionCreators.addTodo,
      editTodo: actionCreators.editTodo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
