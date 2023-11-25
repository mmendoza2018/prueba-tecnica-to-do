import baseApi from "./baseApi";
import objErrorApi from "./objError";
const stepApi = 'tasks' 

const postTasks = (data) => {
  return baseApi(stepApi)
    .post("/", data)
    .catch(objErrorApi);
};

const putTasks = ( data, id ) => {
  return baseApi(stepApi)
    .put(`/${ id }`, data)
    .catch(objErrorApi);
};

const getTasks = () => {
  return baseApi(stepApi)
    .get("/")
    .catch(objErrorApi);
};

const getTask = ( id ) => {
  return baseApi(stepApi)
    .get(`/${ id }`)
    .catch(objErrorApi);
};

const deleteTasks = (id) => {
  return baseApi(stepApi)
    .delete(`/${id}`)
    .catch(objErrorApi);
};

export { 
  postTasks,
  putTasks,
  getTasks,
  getTask,
  deleteTasks
};
