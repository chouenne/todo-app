import FilterPanel from "./components/panelbar/FilterPanel";
import FormAdd from "./components/form/FormAdd";
import TaskBlock from './components/tasklist/TaskBlock';


function App(){

  const filterOptions = ['All', 'Active', 'Completed'];
  const optionTitle = "select a filter type";
  const fieldForm=[
    {type:"text"},
    {placeholder:"Type your task here"}
  ]
  const buttonValue =[
    {add:"Add"}
  ]

  return (

 <>
      <h1>Todo List</h1>
      <FilterPanel filterOptions={filterOptions} optionTitle={optionTitle}/>
      <FormAdd type={fieldForm.type} placeholder={fieldForm.placeholder} buttonValue={buttonValue.add}></FormAdd>
    </>

  )

  }
export default App
