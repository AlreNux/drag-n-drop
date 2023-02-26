import React from "react";
import styles from "./style.module.css";
import catImage from "../../assets/cat.jpg";
import { PictureDrop } from "../PictureDrop/PictureDrop";
import { TextAreaDrop } from "../TextAreaDrop/TextAreaDrop";

export const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Sidebar</h2>
      <TextAreaDrop />
      <PictureDrop url={catImage} />
    </div>
  );
};
