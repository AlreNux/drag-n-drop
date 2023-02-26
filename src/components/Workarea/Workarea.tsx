import React, { Fragment, useState } from "react";
import styles from "./style.module.css";
import { useDrop } from "react-dnd";
import { PictureDrop } from "../PictureDrop/PictureDrop";
import { TextAreaDrop } from "../TextAreaDrop/TextAreaDrop";

export const Workarea: React.FC = () => {
  const [board, setBoard] = useState<Record<string, string>[]>([]);

  const [, drop] = useDrop(() => ({
    accept: ["image", "text"],
    drop: (item: Record<string, string>) => addImageToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (item: Record<string, string>) => {
    console.log(item);
    setBoard((board) => [...board, item]);
  };

  const chooseTypeComponent = (item: Record<string, string>) => {
    switch (item.tag) {
      case "image":
        return <PictureDrop url={item.url} width="690" height="360" board />;
      case "text":
        return <TextAreaDrop board />;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Workarea</h2>
      <div className={styles.board} ref={drop}>
        {board.map((item, index) => {
          return <Fragment key={index}>{chooseTypeComponent(item)}</Fragment>;
        })}
      </div>
    </div>
  );
};
