import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { SignOut, User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import { logout } from "@/services/authService";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push } = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Ajustes da conta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <User size={24} color="rgb(255 255 255)" weight="fill" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <User size={24} weight="fill" />
          </ListItemIcon>
          <Typography
            sx={{
              color: "rgb(156 163 175)",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            Perfil
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <User size={24} weight="fill" />
          </ListItemIcon>
          <Typography
            sx={{
              color: "rgb(156 163 175)",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            Minha conta
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <SignOut size={24} weight="fill" />
          </ListItemIcon>
          <Typography
            sx={{
              color: "rgb(156 163 175)",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            Sair
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
