# CLI Task Tracker

A simple command-line task tracker built with Node.js. This tool allows you to manage tasks through a variety of commands such as adding, listing, marking tasks as done, and removing tasks.

## Installation

To use the CLI Task Tracker globally on your system, you need to install it via npm. Ensure that you have Node.js and npm installed on your system.

1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Run the following command to install it globally:
   `bash
npm install -g .
 `
   Now you can use the `task` command from anywhere in your terminal.

## Usage

The `task` command provides several options to manage your tasks. Below are the available options:

### Add a New Task

To add a new task, use the `-a` or `--add` option followed by the task description:

```bash
task -a "Buy groceries"
```

### List All Tasks

To list all tasks, use the `-l` or `--list` option:

```bash
task -l
```

### Mark a Task as Done

To mark a task as done, use the `-d` or `--done` option followed by the task ID (index):

```bash
task -d 0
```

This marks the task with ID `0` as done.

### Remove a Task

To remove a task, use the `-r` or `--remove` option followed by the task ID (index):

```bash
task -r 1
```

This removes the task with ID `1`.

### Show Help

To display the help information, use the `-h` or `--help` option:

```bash
task -h
```

## Task Storage

Tasks are stored in a `tasks.json` file in the directory where the command is executed. The file is automatically created when you first add a task. Each task is stored with a `task` description and a `done` status.

### Example `tasks.json` Format

```bash
{
"tasks": [
{ "task": "Buy groceries", "done": false },
{ "task": "Write blog post", "done": true }]
}
```
