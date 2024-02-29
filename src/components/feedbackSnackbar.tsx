import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function FeedbackSnackbar(props: any) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={props.open}
      autoHideDuration={6000}
      onClose={props.onClose}
    >
      <Alert
        onClose={props.onClose}
        severity={props.severity}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
