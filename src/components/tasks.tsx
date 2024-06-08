import { AnimatePresence, motion } from "framer-motion";
import { TaskAnimation } from "./taskAnimation";
import { useEffect, useRef, useState } from "react";
import { NewTask } from "./newTask";
import "../App.css";
import { DeleteTask } from "../api/task/deleteTask";

export type Items = {
  id: string;
  text: string;
};

type TaskProps = {
  onNewTask: () => void;
  showNewTask: boolean;

  initialTasks: Items[];
};

export function Tasks(props: TaskProps) {
  const containerRef = useRef(null);

  const [items, setItems] = useState<Items[]>(props.initialTasks);

  useEffect(() => {
    setItems(props.initialTasks);
  }, [props.initialTasks]);

  const handleNewTask = (taskName: string, id: string) => {
    props.onNewTask();
    setItems([...items, { id, text: taskName }]);
  };

  const HanddleRemoveItem = async (id: string) => {
    await DeleteTask({ taskId: id });
    const newItems = items.filter((item: { id: string }) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <motion.div ref={containerRef} className="motionWrapper">
        <AnimatePresence>
          {items.map((item) => (
            <TaskAnimation
              key={item.id}
              onRemoveItem={() => HanddleRemoveItem(item.id)}
              text={item.text}
              container={containerRef}
            />
          ))}
          {props.showNewTask && <NewTask handleNewTask={handleNewTask} />}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
