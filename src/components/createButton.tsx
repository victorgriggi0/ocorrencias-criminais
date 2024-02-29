import Button from "@mui/material/Button";

export default function CreateButton(props: any) {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      sx={{
        alignSelf: "flex-start",
        textTransform: "capitalize",
      }}
    >
      Criar novo item
    </Button>
  );
}
