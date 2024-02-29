import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function SaveButton(props: any) {
  return (
    <Button
      type="submit"
      variant="outlined"
      sx={{
        textTransform: "capitalize",
        minWidth: "150px",
      }}
    >
      {props.isCreatingAnimation || props.isUpdatingAnimation ? (
        <CircularProgress color="inherit" size={24} />
      ) : props.formMode === "update" ? (
        "Salvar mudanças"
      ) : (
        "Adicionar à lista"
      )}
    </Button>
  );
}
