/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus } from "lucide-react";
import { useState } from "react";

type NewTaskProps = {
  handleNewTask: (taskName: string) => void;
};

export function NewTask(props: NewTaskProps) {
  const [inputInfo, setInputInfo] = useState("");

  const handdleChange = (e: any) => {
    setInputInfo(e.target.value);
  };

  const handleClick = () => {
    props.handleNewTask(inputInfo);
    setInputInfo("");
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
