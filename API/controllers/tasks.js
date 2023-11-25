const { response, request } = require("express");
const Task = require("../models/tasks");


const getTasks = async (req, res = response) => {

  try {
    
    const response = await Task.getTasks(false);
    res.status(200).json( response );

  } catch (error) {

    console.error('error :>> ', error);
    res.status(500).json(error);

  }

};

const getTask = async (req, res = response) => {
  const taskId = req.params.id;
  try {
    
    const response = await Task.getTasks(taskId);
    res.status(200).json( response );

  } catch (error) {

    console.error('error :>> ', error);
    res.status(500).json(error);

  }

};

const addTask = async (req, res = response) => {

  const { description } = req.body;

  try {

    const task = new Task({ description })

    const { insertId: idNoticia } = await task.addTask();
    const taskResult = await Task.getTasks(idNoticia);
    res.status(200).json(taskResult[0]);

  } catch (error) {

    console.error('error :>> ', error);
    res.status(500).json(error);

  }

};

const updateTasks = async (req, res = response) => {

  const { description, status_task } = req.body;
  const { id } = req.params;

  try {

    const task = new Task({
      description,
      status_task,
    })

    await task.updateTask(id)
    const taskResult = await Task.getTasks(id);
    res.status(200).json(taskResult[0]);

  } catch (error) {

    console.error('error :>> ', error);
    res.status(500).json(error);

  }

};

const deleteTask = async (req, res = response) => {

  const { id } = req.params;

  try {

    const taskResult = await Task.getTasks( id );
    await Task.deleteTask( id )
    res.status(200).json(taskResult[0]);

  } catch (error) {
    
    console.error('error :>> ', error);
    res.status(500).json(error);

  }

};

module.exports = {
  getTasks,
  getTask,
  updateTasks,
  addTask,
  deleteTask
};
