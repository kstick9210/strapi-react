import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Scrollspy from 'react-scrollspy'

import './App.css';
import logo from './assets/logo.png'

function App() {
  const [categories, setCategories] = useState("");

  const getCategories = () => {
    axios.get('http://localhost:1337/categories')
    .then(response => {setCategories(response.data)})
  } 

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div className="App">
      {categories ? (
        <>
          <nav>
            <img src={logo} className="logo" alt="knife spoon fork"/>

            <Scrollspy
              className="cinque-nav"
              items={ categories.map(c => c.name) }
              currentClassName="is-current"
              offset={-50}
            >
              {categories.map(category => (
                <li key={category.id} className="nav-item">
                  <a href={`#${category.name}`}>{category.name}</a>
                </li>
              ))}
            </Scrollspy>
          </nav>
        
          <main>
            {categories.map(category => (
              <section id={category.name} className="cat-section" key={category.id}>
                <h1 className="cat-name">{category.name}</h1>
                <p>{category.description}</p>
                <br /><br />
                <p>{category.description}</p>
              </section>
            ))}
            <footer>
              <p>A fake landing page made with React, Strapi, Scrollspy, and Hipster Ipsum.</p>
            </footer>
          </main>
        </>
        ) : (
        ""
        )
      }

    </div>
  );
}

export default App;
