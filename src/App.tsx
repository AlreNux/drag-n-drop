import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SideBar } from "./components/Sidebar/SideBar";
import { Workarea } from "./components/Workarea/Workarea";

import styles from "./style.module.css";

export const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        <h1>Simple Editor</h1>
        <div className={styles.wrapper}>
          <SideBar />
          <Workarea />
        </div>
      </div>
    </DndProvider>
  );
};
