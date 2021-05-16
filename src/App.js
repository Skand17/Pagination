import React, { useState } from 'react'
import './App.css';
import Pagination from './pagination'

function App() {

  const [page,setPage] = useState(1)

  const paginate = (page) => {
      console.log(page)
  }

  
  return (
    <div className="App">
        <Pagination  max={5}  totalPost={100} postNumber={20} paginate={paginate} />
    </div>
  );
}

export default App;

