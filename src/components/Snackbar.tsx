import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export type Open = {
  open: boolean;
  severity: "success" | "error";
};
type SnackbarProps = {
  open: Open;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({ open, handleClose }: SnackbarProps) {
  return (
    <div>
      <Snackbar
        open={open.open}
        autoHideDuration={400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={open.severity}>
          {open.severity === "success" ? "Correct!" : "Wrong!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
