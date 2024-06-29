import React from "react";
import Card from "../../../assets/card.png";
import Cards from "../../../assets/cards.png";
import Security from "../../../assets/security-safe.png";
import Group from "./../../../assets/group.png";
import Image from "../basic/Image";
import styles from "./facilities.module.scss";

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <div className={styles.facility}>
        <Image imagenode={Card} />
        <span>Pagamento com até dois cartões</span>
      </div>
      <div className={styles.facility}>
        <Image imagenode={Cards} />
        <span>Em até 10x sem juros</span>
      </div>
      <div className={styles.facility}>
        <Image imagenode={Security} />
        <span>Compra 100% segura</span>
      </div>
      <div className={styles.facility}>
        <Image imagenode={Group} />
        <span>Envio imediato para todo Brasil</span>
      </div>
    </div>
  );
};

export default Facilities;
