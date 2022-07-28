import { useState } from "react";
import PropTypes from "prop-types";
import style from "./Accordion.module.scss";
// import SlideDown from "../../transitions/SlideDown/SlideDown";
import { motion, AnimatePresence } from "framer-motion";

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

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

      {/* <SlideDown in={isOpen} mountOnEnter unmountOnExit> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style["accordion-content"]}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", y: 0 },
              collapsed: { opacity: 0, height: 0, y: "-30px" },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>{children}</motion.div>
        )}
      </AnimatePresence>
      {/* </SlideDown> */}
    </div>
  );
}
