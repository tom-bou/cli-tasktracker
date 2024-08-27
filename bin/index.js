#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");


const options = yargs
    .option("a", { alias: "add", describe: "Add a new task", type: "string" })
    .option("l", { alias: "list", describe: "List all tasks" })
    .option("d", { alias: "done", describe: "Mark a task as done", type: "number" })
    .option("r", { alias: "remove", describe: "Remove a task", type: "number" })
    .help("h")
    .alias("h", "help")
    .argv;

const { add, list, done, remove } = options;

let tasks =  [];


try {
    const data = fs.readFileSync("tasks.json", "utf8");
    tasks = JSON.parse(data)["tasks"];
} catch (err) {
    console.log("Error reading file", err);
}

if (add) {
    tasks.push({ task: add, done: false });
    console.log("Task added successfully at index", tasks.length - 1);
}
if (list) {
    tasks.forEach((task, index) => {
        console.log(index, task.task, task.done ? "✅" : "❌");
    });
}
if (done !== undefined) {
    if (tasks[done]) {
        tasks[done].done = true;
        console.log("Task marked as done successfully");
    } else {
        console.log("Task not found");
    }
}

if (remove !== undefined) {
    if (tasks[remove]) {
        tasks.splice(remove, 1);
        console.log("Task removed successfully");
    } else {
        console.log("Task not found");
    }
}

fs.writeFile("tasks.json", JSON.stringify({ tasks }), (err) => {
    if (err) {
        console.log("Error writing file", err);
    }
});