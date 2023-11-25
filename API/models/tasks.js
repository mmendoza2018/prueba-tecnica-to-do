const connection = require("../database/config");

const defaultData = {
  description: "",
  status_task: "",
  status: 1,
};

class Task {

  constructor(data = defaultData) {
    this.description = data.description;
    this.status_task = data.status_task;
    this.status = data.status;
  }

  addTask() {

    let query = "INSERT INTO tasks (TASK_description) VALUES (?)";

    let params = [];

    params.push(this.description);

    return new Promise((resolve, reject) => {
      connection.execute(query, params, (error, results) => {
        error ? reject(error) : resolve(results);
      });
    });

  }

  updateTask(id) {

    let query = "UPDATE tasks SET TASK_description = ?, TASK_status_task = ? WHERE TASK_id = ?";

    let params = [];

    params.push(this.description, this.status_task, id);

    return new Promise((resolve, reject) => {
      connection.execute(query, params, (error, results) => {
        error ? reject(error) : resolve(results);
      });
    });

  }

  static getTasks(id = false) {

    let query = "SELECT * FROM tasks";

    let params = [];

    if (id) {
      query = query + " where TASK_id = ? AND TASK_status = 1";
      params.push(id);
    }

    return new Promise((resolve, reject) => {
      connection.execute(query, params, (error, results) => {
        error ? reject(error) : resolve(results);
      });
    });

  }

  static deleteTask( id ) {

    let query = "DELETE FROM tasks WHERE TASK_id = ?";

    let params = [];
    params.push(id);

    return new Promise((resolve, reject) => {
      connection.execute(query, params, (error, results) => {
        error ? reject(error) : resolve(results);
      });
    });

  }
  
}

module.exports = Task;
