import { Box, Stack } from "@mui/material";
import MenuSimple from "./MenuSimple";
import { blue } from '@mui/material/colors';


const color = blue[100];

const Task = ({ task, handleOpen, deleteTask }) => {
  return (
    <Box
      sx={{ backgroundColor: color, padding: ".5rem", borderRadius: "10px", marginBottom:".3rem" }}
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box sx={{ width: "90%" }}>{ task.TASK_description }</Box>
        <MenuSimple taskId = {task.TASK_id} handleOpen={handleOpen} deleteTask={deleteTask} />
      </Stack>
    </Box>
  );
};

export default Task;
