/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus } from "lucide-react";
import { useState } from "react";
import { createTask } from "../api/task/createTask";
import axios from "axios";

type NewTaskProps = {
  handleNewTask: (taskName: string, id: string) => void;
};

export function NewTask(props: NewTaskProps) {
  const [inputInfo, setInputInfo] = useState("");

  const handdleChange = (e: any) => {
    setInputInfo(e.target.value);
  };

  const handleClick = async () => {
    const task = await requestCreateTask();
    if (task) {
      props.handleNewTask(task.text, task.id);
      setInputInfo("");
    }
  };

  const requestCreateTask = async () => {
    try {
      setInputInfo("");
      return await createTask({ text: inputInfo });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="inputWrapper">
        <input
          value={inputInfo}
          onChange={handdleChange}
          type="text"
          autoFocus={true}
          className="inputTask"
        />
        <button onClick={handleClick} className="inputButton">
          <Plus size={40} color="#1B1A1A" strokeWidth={2.25} />
        </button>
      </div>
    </>
  );
}
