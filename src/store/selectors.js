const getPlannedTasks = (store) => {
  const { data } = store.todoReducer.data;
  return data.todo;
};

export { getPlannedTasks };
