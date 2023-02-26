import { useDrag } from "react-dnd";
import styles from "./style.module.css";

interface InputDropProps {
  board?: boolean;
}

export const TextAreaDrop = ({ board }: InputDropProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { tag: "text" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return board ? (
    <textarea className={styles.itemDrop} name="textarea" rows={4} cols={50} placeholder="type = textarea" />
  ) : (
    <div ref={drag} className={styles.itemDrop} style={{ border: isDragging ? "var(--drop-border)" : "inherit" }}>
      TEXT
    </div>
  );
};
