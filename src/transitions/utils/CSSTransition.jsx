import { Children, cloneElement, isValidElement, useRef } from 'react';
import { CSSTransition as _CSSTransition } from 'react-transition-group';

const CSSTransition = ({ children, ...props }) => {
  const nodeRef = useRef(null);

  return (
    <_CSSTransition {...props} nodeRef={nodeRef}>
      <>
        {Children.map(children, child =>
          isValidElement(child)
            ? cloneElement(child, { ref: nodeRef })
            : child
        )}
      </>
    </_CSSTransition>
  );
};

export default CSSTransition;