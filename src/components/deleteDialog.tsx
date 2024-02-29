import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

export default function DeleteDialog(props: any) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">Você tem certeza?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Você realmente deseja excluir este item? Esse processo não pode ser
          desfeito.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.onCancel}
          sx={{
            textTransform: "capitalize",
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={props.onConfirm}
          variant="outlined"
          color="error"
          sx={{
            textTransform: "capitalize",
            minWidth: "150px",
          }}
        >
          {props.isDeletingAnimation ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Sim, excluir"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
