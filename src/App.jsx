import React, { useEffect } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { getTodo } from "./store/todo/todoThunk";

const AppContent = () => {
  const { selectValue } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, selectValue]);

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
