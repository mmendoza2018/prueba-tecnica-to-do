import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getTask, putTasks } from "../services/task";
import { toast } from "react-toastify";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalCustom = ({ open, handleClose, idTask, handleUpdate }) => {
  const [inputDesc, setInputDesc] = useState("hola");
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getTask(idTask);
        let { TASK_description, TASK_status_task } = response.data[0];
        setInputDesc(TASK_description);
        setInputState(TASK_status_task);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    };

    if (open) {
      fetchData();
    }
  }, [open, idTask]);

  const update  = async () => {

    try {
      let data = {
        "id":idTask,
        "description":inputDesc,
        "status_task": inputState
      }

      await putTasks(data, idTask);
      handleUpdate();
      toast.success("Actualizado con exito!", { position: "bottom-right" });
    } catch (error) {
      toast.error(error.message, { position: "bottom-right" });
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="standard-basic"
          sx={{ width: "80%", marginBottom: "1rem" }}
          label="Tarea"
          variant="standard"
          value={inputDesc}
          onChange={(e) => setInputDesc(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputState}
            label="Estado"
            onChange={(e) => setInputState(e.target.value)}
          >
            <MenuItem value={'terminado'}>terminado</MenuItem>
            <MenuItem value={'pendiente'}>pendiente</MenuItem>
          </Select>
          <Button
            variant="contained"
            size="small"
            color="success"
            sx={{marginTop:'1rem'}}
            onClick={update}
          >
            Agregar
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default ModalCustom;
