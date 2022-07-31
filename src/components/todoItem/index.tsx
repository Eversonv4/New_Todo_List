import { FiTrash2 } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
import { LayoutList, ActionButton } from "./styles";

interface TodoItemProps {
  todoItem: string;
  id: number;
  key: number;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
}

export default function Todos(props: TodoItemProps) {
  return (
    <LayoutList>
      <li>{props.todoItem}</li>
      <div>
        <ActionButton
          color="#3e00ff"
          onClick={() => {
            props.updateTodo(props.id);
          }}
        >
          <FaPen />
        </ActionButton>
        <ActionButton
          color="#ff2050"
          onClick={() => {
            props.deleteTodo(props.id);
          }}
        >
          <FiTrash2 />
        </ActionButton>
      </div>
    </LayoutList>
  );
}
