const fs = require('fs');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Save Fail', err);
    });
}

const loadDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const create = (description) => {
    loadDB();
    let toDo = {
        description,
        completed: false
    };
    todoList.push(toDo);
    saveDB();
    return toDo;
}

const getList = () => {
    loadDB();
    return todoList;
}

const update = (desc, completed = true) => {
    loadDB();
    let index = todoList.findIndex(task => {
        return task.description === desc;
    })
    if (index >= 0) {
        todoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleted = (dec) => {
    loadDB();
    let newList = todoList.filter(task => {
        return task.description !== dec
    });
    if (todoList.length === newList.length) {
        return false;
    } else {
        todolist = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleted
}