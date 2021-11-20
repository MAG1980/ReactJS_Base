import { forwardRef, useEffect } from "react";

export const withForwardRef = (Component) => {
  return (props) => {
    const inputRef = forwardRef();
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
    return <Component {...props} forwardRef={inputRef} />;
  };
};
