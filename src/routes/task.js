const express = require('express');
const router = express.Router();

const pool = require('../database')

router.post('/nueva-tarea', async (req,res)=>{
    console.log(req.body)
    const {title, description} = req.body
    const newTask={
        title,
        description
    };
    await pool.query('INSERT INTO tasks set ?', [newTask]);
    res.send('Exito')
})
router.get('/', async(req,res)=>{
    await pool.query('SELECT * FROM tasks');
    console.log(tasks)
    res.send({tasks})
})
router.get('/delete/:id', async(req,res)=>{
    console.log(req.params.id)
    const {id} = req.params;
    await pool.query('DELETE FROM tasks WERE ID=?', [id]);
    res.redirect('/')
})
router.get('/edit/:id', async(req,res)=>{
    console.log(req.params.id)
    const {id} = req.params;
    const tasks = await pool.query('DELETE * FROM tasks WERE ID=?', [id]);
    
    res.send({tasks: tasks})
})
router.post('/edit/:id', async(req,res)=>{
    console.log(req.params.id)
    const {id} = req.params;
    const { title, description } = req.body;
    const newTask ={
        title,
        description
    }
    await pool.query('DELETE tasks set? WERE ID=?', [newTask,id]);
    res.redirect('/')
})

module.exports = router;