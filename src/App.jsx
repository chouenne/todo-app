import React, {useState} from 'react';
import FilterBar from "./components/FilterBar";

function App(){
  const [filter, setFilter] = useState('all');

  return (
    <>
      <h1>Todo App</h1>
      <FilterBar filter={filter} setFilter={setFilter}/>
    </>

  )

  }
export default App
