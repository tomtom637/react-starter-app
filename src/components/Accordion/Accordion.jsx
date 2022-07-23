import { useState } from "react";
import style from "./Accordion.module.scss";
import SlideDown from "../../transitions/SlideDown/SlideDown";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.accordion}>
      <header className={style["accordion-header"]}>
        <h3 className={style["accordion-title"]}>{title}</h3>
        <button className={style["accordion-button"]} onClick={handleClick}>
          {isOpen ? "Hide" : "Show"}
        </button>
      </header>

      <SlideDown in={isOpen} mountOnEnter unmountOnExit>
        <div className={style["accordion-content"]}>{children}</div>
      </SlideDown>
    </div>
  );
}
