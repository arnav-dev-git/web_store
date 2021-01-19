import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ varient, children }) => {
  //   return <Alert varient={varient}>{children}</Alert>;
  return (
    <>
      <Alert
        // varient={varient}
        className={`alert alert-dismissible alert-${varient}`}
      >
        {children}
      </Alert>
    </>
  );
};

Message.defaultProps = {
  varient: "info",
};

export default Message;
