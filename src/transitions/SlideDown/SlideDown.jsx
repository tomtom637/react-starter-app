import CSSTransition from "../utils/CSSTransition";
import transitions from "./SlideDown.module.scss";

export default function SlideDown(props) {
  return <CSSTransition {...props} timeout={200} classNames={transitions} />;
}
