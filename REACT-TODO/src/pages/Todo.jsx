import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Task from "../components/Task";
import FormAdd from "../components/formAdd";
import { useEffect, useState } from "react";
import { deleteTasks, getTasks } from "../services/task";
import { toast } from "react-toastify";
import ModalCustom from "../components/ModalCustom";

const Todo = () => {
  const [data, setData] = useState([]);
  const [reloading, setReloading] = useState(false);
  const [idTaskUp, setIdTaskUp] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (e, idTask) => {
    setOpen(true);
    setIdTaskUp(idTask);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getTasksAPI();
  }, [reloading]);

  const getTasksAPI = async () => {
    try {
      let allTasks = await getTasks();
      setData(allTasks.data);
    } catch (error) {
      toast.error(error, { position: "bottom-right" });
    }
  };

  const handleAdd = () => {
    setReloading((reloading) => !reloading);
  };

  const handleUpdate = () => {
    setReloading((reloading) => !reloading);
  };

  const deleteTask = async (e, idTask) => {
    try {
      await deleteTasks(idTask);
      toast.success("Eliminado con exito!", { position: "bottom-right" });
      setReloading((reloading) => !reloading);
    } catch (error) {
      toast.error(error, { position: "bottom-right" });
    }
  };

  return (
    <Box
      sx={{ flexGrow: 1, width: "60%", margin: "0 auto", marginTop: "5rem" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <h5>TODO - REACT/NODE</h5>
      </Box>

      <Grid container spacing={2} sx={{ margin: "2rem 0" }}>
        <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
          <FormAdd handleAdd={handleAdd} />
          <Box sx={{ margin: "1rem 0" }}>
            {data.map((task) => {
              return (
                task.TASK_status_task === "pendiente" && (
                  <Task
                    task={task}
                    handleOpen={handleOpen}
                    key={task.TASK_id}
                    deleteTask={deleteTask}
                  />
                )
              );
            })}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ border: "solid 1px black", padding: "1rem" }}
        >
          {data.map((task) => {
            return (
              task.TASK_status_task === "terminado" && (
                <Chip
                  label={task.TASK_description}
                  color="success"
                  variant="outlined"
                  key={task.TASK_id}
                />
              )
            );
          })}
        </Grid>
      </Grid>

      <ModalCustom
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        idTask={idTaskUp}
        handleUpdate={handleUpdate}
      />
    </Box>
  );
};

export default Todo;
