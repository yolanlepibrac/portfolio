import { Button } from "@material-ui/core";
import * as React from "react";

interface PopupProps {
  close: () => void;
}

export const Popup: React.FunctionComponent<PopupProps> = ({ close }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <Button onClick={close}>X</Button>
      hello popup
    </div>
  );
};
