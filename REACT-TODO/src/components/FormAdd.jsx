import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { postTasks } from "../services/task";
import { toast } from "react-toastify";

const FormAdd = ({ handleAdd }) => {
  const [input, setInput] = useState("");
  const agregar = async () => {
    let data = { description: input };
    try {
      await postTasks(data);
      toast.success("agregado con exito!", { position: "bottom-right" });
      handleAdd();
    } catch (error) {
      toast.error(error, { position: "bottom-right" });
    }
  };
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      alignItems={"end"}
      justifyContent={"space-between"}
    >
      <TextField
        id="standard-basic"
        sx={{ width: "80%" }}
        label="Tarea"
        variant="standard"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={agregar}
      >
        Agregar
      </Button>
    </Stack>
  );
};

export default FormAdd;
