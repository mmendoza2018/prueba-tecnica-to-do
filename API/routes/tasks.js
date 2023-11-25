const { Router } = require('express');
const { check } = require('express-validator');

const validarCampos  = require('../middlewares/validar-campos');

const { getTasks ,getTask, updateTasks, addTask, deleteTask } = require('../controllers/tasks');

const router = Router();

/**
 * {{url}}/api/tasks
 */

router.get('/', getTasks );
router.get('/:id', getTask );
router.put('/:id', updateTasks );
router.post('/', addTask );
router.delete('/:id', deleteTask );

module.exports = router;