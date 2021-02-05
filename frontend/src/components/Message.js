import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  //   return <Alert varient={varient}>{children}</Alert>;
  return (
    <>
      <Alert className={`alert alert-dismissible`} variant={variant}>
        {children}
      </Alert>
    </>
  );
};

Message.defaultProps = {
  varient: "info",
};

export default Message;
