import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [ category, setCategory] = useState("Code")
  const [ text, setText] = useState("")

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  const handleCategoryInput = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({text, category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text}
          onChange={handleTextInput}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={handleCategoryInput}
        >
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
