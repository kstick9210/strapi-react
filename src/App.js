import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

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
          <nav
            className="cinque-nav"
            // items={ categories.map(c => c.name) }
            // currentClassName="is-current"
            // offset={100}
          >
            {categories.map(category => (
              <li key={category.id} className="nav-item">
                <a href={`#${category.name}`}>{category.name}</a>
              </li>
            ))}
          </nav>
        
          <main>
            {categories.map(category => (
              <section id={category.name}>
                <h1 className="cat-name">{category.name}</h1>
                <p>
                  Heirloom hella food truck, health goth yr scenester plaid 
                  try-hard. Edison bulb jean shorts brunch cold-pressed. Blog 
                  bushwick locavore everyday carry skateboard roof party fingerstache. 
                  Portland waistcoat bicycle rights hexagon PBR&B lomo deep v af 
                  selvage. Organic bespoke dreamcatcher swag lumbersexual tousled 
                  roof party you probably haven't heard of them sriracha, poke mlkshk 
                  godard echo park. Pug listicle fingerstache hexagon letterpress 
                  snackwave.
                  <br /><br />
                  Art party echo park knausgaard, venmo tumblr kinfolk banjo trust 
                  fund yuccie microdosing ugh. Retro raclette scenester mixtape bicycle 
                  rights. Bespoke literally disrupt asymmetrical. Cray cloud bread 
                  readymade irony four loko bespoke hashtag viral. Pok pok venmo iPhone, 
                  actually kale chips heirloom tumblr lomo glossier fashion axe. Next 
                  level messenger bag kinfolk, tilde aesthetic direct trade hoodie.
                  <br /><br />
                  Fingerstache food truck pop-up, bespoke four loko cloud bread ramps 
                  blue bottle austin. Affogato photo booth 8-bit, asymmetrical etsy 
                  narwhal portland pork belly retro palo santo yr hella flexitarian 
                  slow-carb. Direct trade intelligentsia cornhole wayfarers, stumptown 
                  keytar activated charcoal. Sartorial la croix typewriter next level 
                  banh mi flannel food truck mustache bushwick retro.
                  <br /><br />
                  Banh mi master cleanse polaroid, microdosing keffiyeh quinoa blue bottle 
                  shaman ethical kickstarter crucifix activated charcoal VHS iceland authentic. 
                  Narwhal fam cronut retro organic shoreditch. Four dollar toast asymmetrical 
                  brooklyn paleo +1 hot chicken meditation small batch literally. Tilde 8-bit 
                  narwhal literally intelligentsia. Bespoke normcore hashtag venmo lumbersexual 
                  gochujang echo park slow-carb pickled hoodie trust fund shoreditch chartreuse. 
                  Blog truffaut franzen, skateboard actually ugh sartorial coloring book echo park 
                  banh mi williamsburg pop-up keytar.
                </p>
              </section>
            ))}
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
