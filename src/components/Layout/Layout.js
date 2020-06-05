import React from "react";
import Aux from "../../Hoc/Aux";
import styles from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar,sidedrawer, backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
