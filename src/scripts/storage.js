
import { env } from '../config/env'

// scripts/storage.js

const STORAGE_KEY = env('LOCAL_STORAGE_KEY', 'todo-storage');
let CopyData = deepCopy(localStorage.getItem(STORAGE_KEY) ?? "{}") ?? {};

function deepCopy(value) { return deSerialize(value) }
function deSerialize(value) { return JSON.parse(value) }
function serialize(value) { return JSON.stringify(value) }
function save() { 
    localStorage.setItem(STORAGE_KEY, serialize(CopyData)); 
    // sync copy
    CopyData = deepCopy(localStorage.getItem(STORAGE_KEY) ?? "{}") ?? {};

    console.log(CopyData);
}
function getLength() { return Object.keys(CopyData).length }

function addTodo(title = '', completed = false) {
    const id = 'todo_id-' + crypto.randomUUID();
    CopyData[id] = {
        title: title,
        completed: completed,
        last_created: Date.now(),
    };
    save();
}

function remove(id) {
    if (!CopyData[id]) { console.warn(`ToDo not found: ${id}`); return false; }
    delete CopyData[id];
    save();
}

function get(id) { return CopyData[id]; }
function getAll() { return CopyData; }
function setStatus(id, status) {
    let data = get(id);
    if (!data) { console.warn(`No todo found: ${id}`); return; }
    data.completed = status;
    save();
}
function updateTitle(id, title) {
    let data = get(id);
    if (!data) { console.warn(`No todo found: ${id}`); return; }
    data.title = title;
    save();
}
function getAllCompleted() {
    let active = {};
    Object.entries(CopyData).forEach(([key, value], index) => {
        if (!value.completed) return;
        active[key] = value;
    });
    return active;
}
function getAllActive() {
    let active = {};
    Object.entries(CopyData).forEach(([key, value], index) => {
        if (value.completed) return;
        active[key] = value;
    });
    return active;
}

// Export all functions as a default object
const storage = {
    addTodo,
    remove,
    get,
    getAll,
    setStatus,
    updateTitle,
    getLength,
    getAllActive,
    getAllCompleted,
};

export default storage;
