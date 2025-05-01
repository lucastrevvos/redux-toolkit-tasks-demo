import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  addTask,
  removeTask,
  editTask,
  toggleDone,
} from "../features/tasks/tasksSlice";

//import { initialState, taskReducer } from "../features/tasks/taskReducer";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import { setFilter } from "../features/filter/filterSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  //const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const tasks = useSelector((state: RootState) => state.tasks);
  const [input, setInput] = useState("");

  const filter = useSelector((state: RootState) => state.filter);
  const filteredTasks = tasks.filter((t) =>
    t.name.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div className="p-4 max-w-xl mx-auto">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-4">Minhas Tarefas</h1>

      <div className="flex gap-2 mb-4">
        <Input
          value={useSelector((state: RootState) => state.filter)}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Filtrar tarefas"
        />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa"
        />

        <Button
          onClick={() => {
            if (input.trim() === "") return;
            //dispatch({ type: "add", payload: { name: input } });
            dispatch(addTask({ name: input }));
            setInput("");
          }}
        >
          Adicionar
        </Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => {
          return (
            <Card key={task.id} className="flex flex-col gap-2">
              {editTaskId === task.id ? (
                <div className="flex gap-2">
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      if (editValue.trim() === "") return;
                      dispatch(editTask({ id: task.id, name: editValue }));
                      setEditTaskId(null);
                    }}
                  >
                    Salvar
                  </Button>
                  <Button onClick={() => setEditTaskId(null)}>Cancelar</Button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <span
                    className={task.done ? "line-through text-gray-500" : ""}
                  >
                    {task.name}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => dispatch(toggleDone(task.id))}
                    >
                      {task.done ? "Desfazer" : "Concluir"}
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setEditTaskId(task.id);
                        setEditValue(task.name);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeTask(task.id))}
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
