import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All") 

  const removeTask = (taskToDeleteText) => {
    setTasks(tasks.filter(task => task.text !== taskToDeleteText))
  }

  const handleSelectedCategory = (selectedCate) => {
    setSelectedCategory(selectedCate)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(selectedCategory === "All") return tasks
    return task.category === selectedCategory
  })

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        handleSelectedCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={addNewTask}
      />
      <TaskList 
        tasks={tasksToDisplay}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
