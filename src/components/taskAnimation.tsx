import { PanInfo, Variants, motion } from "framer-motion";
import { RefObject, useCallback } from "react";

export type TodoItemProps = {
  onRemoveItem: () => void;
  container?: RefObject<Element>;
  text: string;
};

const variantBox: Variants = {
  hidden: { opacity: 0, top: -100 },
  show: { opacity: 1, top: 0 },
};

export function TaskAnimation({
  onRemoveItem,
  container,
  text,
}: TodoItemProps) {
  const handleDragEnd = useCallback(
    (_event: MouseEvent, info: PanInfo) => {
      if (info.offset.x < -150) {
        onRemoveItem();
      }
    },
    [onRemoveItem]
  );

  return (
    <motion.div
      variants={variantBox}
      dragConstraints={container}
      onDragEnd={handleDragEnd}
      className="Task"
      drag="x"
      exit="hidden"
    >
      <p className="Text">{text}</p>
    </motion.div>
  );
}
