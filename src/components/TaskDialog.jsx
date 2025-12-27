import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Button } from "./Button";
import { Input } from "./Input";
import "./task-dialog.css";
import { TaskSelect } from "./TaskSelect";

export function TaskDialog({ isOpen, handleClose, handleSubmit }) {
  const [tittle, setTittle] = useState("");
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState("");

  const nodeRef = useRef();

  function saveTask() {
    if (tittle.trim() || time.trim() || description.trim()) {
      return alert("Os campos título, horário e descrição são obrigatórios!");
    }
    handleSubmit({
      id: Math.random(),
      tittle,
      description,
      time,
      status: "not_started",
    });
    handleClose(false);
  }

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={500}
      classNames="task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed font-inter top-0 justify-center items-center flex backdrop-blur h-screen w-full"
          >
            <div className="p-5 rounded-xl bg-white space-y-4 w-84 shadow">
              <div className="text-center space-y-1">
                <h1 className="font-semibold text-xl">Nova Tarefa</h1>
                <span className="text-sm text-[#9A9C9F]">
                  Insira as informações abaixo
                </span>
              </div>
              <div className="font-inter space-y-4">
                <Input
                  label={"Título"}
                  placeholder="Título da tarefa"
                  value={tittle}
                  onChange={(event) => setTittle(event.target.value)}
                />

                <TaskSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  label={"Descrição"}
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <div className="flex gap-3">
                  <Button
                    size={"large"}
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size={"large"}
                    onClick={() => {
                      saveTask();
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
}
