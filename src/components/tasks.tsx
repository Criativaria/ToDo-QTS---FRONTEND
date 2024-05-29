import { AnimatePresence, motion } from "framer-motion";
import { TaskAnimation } from "./taskAnimation";
import { useRef, useState } from "react";
import { NewTask } from "./newTask";
import "../App.css";

type Items = {
  id: string;
  text: string;
};

type TaskProps = {
  onNewTask: () => void;
  showNewTask: boolean;
};

export function Tasks(props: TaskProps) {
  const containerRef = useRef(null);

  const [items, setItems] = useState<Items[]>([]);

  const handleNewTask = (taskName: string) => {
    props.onNewTask();
    setItems([...items, { id: crypto.randomUUID(), text: taskName }]);
  };

  const HanddleRemoveItem = (id: string) => {
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
