import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { Database, HouseSimple, Buildings } from "@phosphor-icons/react";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/">
      <ListItemIcon>
        <HouseSimple size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Início
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Ocorrências
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Equipes
      </Typography>
    </ListItemButton>
    <ListItemButton href="/departments">
      <ListItemIcon>
        <Buildings size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Departamentos
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Usuários
      </Typography>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ color: "rgb(156 163 175)" }}>
      Repertórios salvos
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Tipos de Ocorrências
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Tipos de Locais
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Tipos de Status
      </Typography>
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ color: "rgb(156 163 175)" }}>
      Controles de acesso
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Cargos
      </Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Database size={24} color="#999999" weight="fill" />
      </ListItemIcon>
      <Typography
        sx={{
          color: "rgb(156 163 175)",
          fontSize: "0.875rem",
          lineHeight: "2rem",
        }}
      >
        Permissões
      </Typography>
    </ListItemButton>
  </React.Fragment>
);
