import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ varient, children }) => {
  //   return <Alert varient={varient}>{children}</Alert>;
  return (
    <>
      <Alert varient={varient}>{children.message}</Alert>
    </>
  );
};

Message.defaultProps = {
  varient: "info",
};

export default Message;
