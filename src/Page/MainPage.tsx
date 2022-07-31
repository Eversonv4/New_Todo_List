import React, { useState } from "react";
import Todos from "../components/todoItem";
import {
  MainContainer,
  ContainerLayout,
  MainTitle,
  Input,
  AddButton,
  LayoutButton,
  UlList,
} from "./styles";

export default function MainPage() {
  const dataFromLocalStorage = localStorage.getItem("Tasks");
  if (dataFromLocalStorage === null) {
    localStorage.setItem("Tasks", "");
  }
  const convertedToArray =
    dataFromLocalStorage !== "" ? dataFromLocalStorage?.split(",") : [];
  const [allTodos, setAllTodos] = useState<any>(convertedToArray);
  const [todo, setTodo] = useState("");
  const inputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(`${event.target.value.replace(/,/gi, "")}`);
  };

  const addTodo = () => {
    if (todo !== "") {
      setAllTodos([...allTodos, todo]);
      localStorage.setItem("Tasks", `${[...allTodos, todo]}`);
    }
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const filteredItems = allTodos.filter((todoItem: any, index: number) => {
      return index !== id;
    });
    localStorage.setItem("Tasks", `${filteredItems}`);
    setAllTodos(filteredItems);
  };

  const updateTodo = (id: number) => {
    const filteredItem = allTodos.filter((todoItem: any, index: number) => {
      return index === id;
    });
    setTodo(filteredItem);
    deleteTodo(id);
  };
  return (
    <MainContainer>
      <ContainerLayout>
        <MainTitle>My Tasks</MainTitle>
        <LayoutButton>
          <Input
            type="text"
            name="add-todo"
            placeholder="Add New Task"
            value={todo}
            onChange={inputTodo}
            autoFocus
          />
          <AddButton onClick={addTodo}>Add</AddButton>
        </LayoutButton>
        {allTodos.length > 0 && (
          <UlList>
            {allTodos.map((todoItem: string, index: number) => {
              return (
                <Todos
                  todoItem={todoItem}
                  key={index}
                  id={index}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              );
            })}
          </UlList>
        )}
      </ContainerLayout>
    </MainContainer>
  );
}
