import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState("");

  const getCategories = () => {
    axios.get('http://localhost:1337/categories')
    .then(response => {setCategories(response.data)})

    console.log(categories)
    
  } 

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div className="App">
      {categories ? (
        <>
          {categories.map(category => <h1>{category.name}</h1>)}
        </>
      ) : (
        <h2>Lodaing...</h2>
      )
    }
    </div>
  );
}

export default App;
