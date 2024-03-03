"use client";

import * as React from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { User } from "@phosphor-icons/react";

import InternalLayout from "@/layouts/internalLayout";
import { get, create, updt, del } from "@/services/departmentService";
import Card from "@/components/card";
import DeleteDialog from "@/components/deleteDialog";
import FeedbackSnackbar from "@/components/feedbackSnackbar";
import CreateButton from "@/components/createButton";
import SaveButton from "@/components/saveButton";

type Department = {
  id: number;
  name: string;
  zip: string;
  state: string;
  city: string;
  neighborhood: string;
  avenue: string;
  usersInDepartment: { id: number; name: string }[];
};

export default function Departments() {
  const [departments, setDepartments] = React.useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] =
    React.useState<Department | null>(null);
  const [isSearchingAnimation, setIsSearchingAnimation] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  async function find() {
    try {
      setIsSearchingAnimation(true);
      const result = await get(currentPage, pageSize);
      setDepartments(result.departments);
      setCurrentPage(result.currentPage);
      setTotalPages(result.totalPages);
    } catch (error) {
      handleOpenSnackbar({
        severity: "error",
        message: error,
      });
    } finally {
      setIsSearchingAnimation(false);
    }
  }

  React.useEffect(() => {
    find();
  }, [pageSize, currentPage]);

  /*  */
  const [isDepartmentUsersVisible, setIsDepartmentUsersVisible] =
    React.useState(false);

  const showDepartmentUsers = (department: Department) => {
    setSelectedDepartment(department);
    setIsDepartmentUsersVisible(true);
  };

  const hideDepartmentUsers = () => {
    setIsDepartmentUsersVisible(false);
    setSelectedDepartment(null);
  };

  /*  */
  const [isDeletingDepartment, setIsDeletingDepartment] = React.useState(false);
  const [isDeletingAnimation, setIsDeletingAnimation] = React.useState(false);

  const showDeleteDepartment = (department: Department) => {
    setSelectedDepartment(department);
    setIsDeletingDepartment(true);
  };

  const hideDeleteDepartment = () => {
    setIsDeletingDepartment(false);
    setSelectedDepartment(null);
  };

  const handleDeleteDepartment = async () => {
    if (!selectedDepartment) return;

    try {
      setIsDeletingAnimation(true);
      await del(selectedDepartment);
      await find();
      handleOpenSnackbar({
        severity: "success",
        message: "Exclusão bem-sucedida: o conteúdo foi removido.",
      });
    } catch (error) {
      handleOpenSnackbar({
        severity: "error",
        message: error,
      });
    } finally {
      setIsDeletingAnimation(false);
      setIsDeletingDepartment(false);
      setSelectedDepartment(null);
    }
  };

  /*  */
  const [formData, setFormData] = React.useState({
    name: "",
    zip: "",
    state: "",
    city: "",
    neighborhood: "",
    avenue: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*  */
  const [formMode, setFormMode] = React.useState<"create" | "update" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formMode === "create") {
      handleCreateDepartment();
    } else if (formMode === "update") {
      handleUpdateDepartment();
    }
  };

  const hideForm = () => {
    setFormMode(null);
    setFormData({
      name: "",
      zip: "",
      state: "",
      city: "",
      neighborhood: "",
      avenue: "",
    });
    setSelectedDepartment(null);
  };

  /*  */
  const [isCreatingAnimation, setIsCreatingAnimation] = React.useState(false);

  const handleCreateDepartment = async () => {
    try {
      setIsCreatingAnimation(true);
      await create(formData);
      await find();
      handleOpenSnackbar({
        severity: "success",
        message: "Nova adição: o conteúdo foi criado conforme solicitado.",
      });
    } catch (error) {
      handleOpenSnackbar({
        severity: "error",
        message: error,
      });
    } finally {
      setIsCreatingAnimation(false);
      setFormMode(null);
      setFormData({
        name: "",
        zip: "",
        state: "",
        city: "",
        neighborhood: "",
        avenue: "",
      });
    }
  };

  /*  */
  const [isUpdatingAnimation, setIsUpdatingAnimation] = React.useState(false);

  const showUpdateDepartment = (department: Department) => {
    setSelectedDepartment(department);
    setFormData({
      name: department.name || "",
      zip: department.zip || "",
      state: department.state || "",
      city: department.city,
      neighborhood: department.neighborhood || "",
      avenue: department.avenue || "",
    });
    setFormMode("update");
  };

  const handleUpdateDepartment = async () => {
    if (!selectedDepartment) return;

    try {
      setIsUpdatingAnimation(true);
      await updt(formData, selectedDepartment);
      await find();
      handleOpenSnackbar({
        severity: "success",
        message: "Sucesso na edição: as alterações foram salvas.",
      });
    } catch (error) {
      handleOpenSnackbar({
        severity: "error",
        message: error,
      });
    } finally {
      setIsUpdatingAnimation(false);
      setFormMode(null);
      setFormData({
        name: "",
        zip: "",
        state: "",
        city: "",
        neighborhood: "",
        avenue: "",
      });
      setSelectedDepartment(null);
    }
  };

  /*  */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severitySnackbar, setSeveritySnackbar] = React.useState<
    "success" | "info" | "warning" | "error"
  >("warning");
  const [messageSnackbar, setMessageSnackbar] = React.useState("");

  const handleOpenSnackbar = (props: any) => {
    setSeveritySnackbar(props.severity);
    setMessageSnackbar(props.message);
    setOpenSnackbar(true);
  };

  return (
    <InternalLayout>
      {/*  */}
      <div className="flex flex-col items-center space-y-7">
        <CreateButton onClick={() => setFormMode("create")} />

        {isSearchingAnimation ? (
          <CircularProgress color="inherit" />
        ) : (
          <>
            {departments.length > 0 ? (
              departments.map((department) => (
                <Card
                  key={department.id}
                  image={
                    "https://cdn1.sputniknewsbr.com.br/img/07e7/0c/0e/32038704_0:78:3072:1806_1920x0_80_0_0_8ddd5fefacfe24fada066eebb9bcd939.jpg.webp"
                  }
                  title={department.name}
                  supporting={
                    <>
                      {department.avenue}, {department.neighborhood},{" "}
                      {department.city} - {department.state}
                    </>
                  }
                  footer={
                    <>
                      <Button
                        onClick={() => showDepartmentUsers(department)}
                        sx={{
                          color: "rgb(24 24 27)",
                          textTransform: "capitalize",
                        }}
                      >
                        Visualizar usuários
                      </Button>
                      <Button
                        onClick={() => showUpdateDepartment(department)}
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => showDeleteDepartment(department)}
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        Apagar
                      </Button>
                    </>
                  }
                />
              ))
            ) : (
              <p className="lowercase text-center font-normal text-sm text-zinc-600">
                não há departamentos cadastrados.
              </p>
            )}

            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(e, page) => setCurrentPage(page)}
                shape="rounded"
              />
            </Stack>
          </>
        )}
      </div>

      {/*  */}
      <Dialog
        open={isDepartmentUsersVisible}
        onClose={hideDepartmentUsers}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">
          Usuários neste departamento
        </DialogTitle>
        <DialogContent>
          {selectedDepartment &&
          selectedDepartment.usersInDepartment.length > 0 ? (
            <List>
              {selectedDepartment.usersInDepartment.map((user) => (
                <ListItem key={user.id}>
                  <ListItemIcon>
                    <User size={24} />
                  </ListItemIcon>
                  <ListItemText primary={user.name} />
                </ListItem>
              ))}
            </List>
          ) : (
            <DialogContentText>
              Não há usuários cadastrados neste departamento.
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={hideDepartmentUsers}
            sx={{
              textTransform: "capitalize",
            }}
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      {/*  */}
      <DeleteDialog
        open={isDeletingDepartment}
        onCancel={hideDeleteDepartment}
        onConfirm={handleDeleteDepartment}
        isDeletingAnimation={isDeletingAnimation}
      />

      {/*  */}
      <Dialog open={formMode !== null} onClose={hideForm}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {formMode === "update"
              ? "Atualize as informações do item"
              : "Novo item"}
          </DialogTitle>
          <DialogContent className="space-y-4">
            <TextField
              required
              margin="dense"
              id="name"
              name="name"
              label="Nome do Departamento"
              type="text"
              fullWidth
              variant="standard"
              value={formData.name}
              onChange={handleInputChange}
            />

            <TextField
              margin="dense"
              id="name"
              name="zip"
              label="Informe o CEP"
              type="text"
              fullWidth
              variant="standard"
              value={formData.zip}
              onChange={handleInputChange}
            />

            <TextField
              margin="dense"
              id="name"
              name="state"
              label="Selecione o Estado"
              type="text"
              fullWidth
              variant="standard"
              value={formData.state}
              onChange={handleInputChange}
            />

            <TextField
              margin="dense"
              id="name"
              name="city"
              label="Informe a Cidade"
              type="text"
              fullWidth
              variant="standard"
              value={formData.city}
              onChange={handleInputChange}
            />

            <TextField
              margin="dense"
              id="name"
              name="neighborhood"
              label="Informe o Bairro"
              type="text"
              fullWidth
              variant="standard"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />

            <TextField
              margin="dense"
              id="name"
              name="avenue"
              label="Informe a Avenida"
              type="text"
              fullWidth
              variant="standard"
              value={formData.avenue}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={hideForm}
              sx={{
                textTransform: "capitalize",
              }}
            >
              Cancelar
            </Button>
            <SaveButton
              isCreatingAnimation={isCreatingAnimation}
              isUpdatingAnimation={isUpdatingAnimation}
              formMode={formMode}
            />
          </DialogActions>
        </form>
      </Dialog>

      {/*  */}
      <FeedbackSnackbar
        open={openSnackbar}
        severity={severitySnackbar}
        message={messageSnackbar}
        onClose={() => setOpenSnackbar(false)}
      />
    </InternalLayout>
  );
}
