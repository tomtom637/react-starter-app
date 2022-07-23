import CSSTransition from '../utils/CSSTransition';
import fadeTransitions from "./MoveToSideAndFade.module.scss";

export default function MoveToSideAndFade(props) {
  return (
    <CSSTransition
      {...props}
      timeout={{enter: 200, exit: 200}}
      classNames={fadeTransitions}
    />
  );
}