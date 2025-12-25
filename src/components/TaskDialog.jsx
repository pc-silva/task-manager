import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Button } from "./Button";
import { Input } from "./Input";
import "./task-dialog.css";

export function TaskDialog({ isOpen, handleClose }) {
  const nodeRef = useRef();
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
                <Input label={"Título"} placeholder="Título da tarefa" />
                <Input label={"Horário"} placeholder="Horário" />
                <Input label={"Descrição"} placeholder="Descreva a tarefa" />
                <div className="flex gap-3">
                  <Button
                    size={"large"}
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button size={"large"}>Salvar</Button>
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
