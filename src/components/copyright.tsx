import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Ocorrências Criminais "}
      {new Date().getFullYear()}
      {" - Produzido com ❤️ por "}
      <Link color="inherit" href="https://br.linkedin.com/in/victorgriggi">
        Victor Griggi
      </Link>
    </Typography>
  );
}
