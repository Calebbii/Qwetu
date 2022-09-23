import './App.css';
// import Axios from "axios"
// import { useState } from 'react';
// import Category from './components/Category';

// function App() {

// //   const [query, setquery] = useState("")
// //   const [meals, setmenu] =  useState([])

// //   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

// //   async function getMenu() {
// //     var result = await Axios.get(url);
// //     setmenu(result.data.meals);
// //     console.log(result.data.meals);
// //   }

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     getMenu();
// //   }

// //   return (
// //     <div className="App" style={{height: 10}}>
// //       <h1 >Qwetu Dishes</h1>
// //       <form className='search' onSubmit={onSubmit}>
// //         <input
// //         type="text"
// //         placeholder='Enter Meal'
// //         value={query}
// //         onChange={(e) => setquery(e.target.value)}
// //         />

// //         <input type="submit" value="Search"/>

// //       </form>
// //       <div>
// //         {meals.map(meals => {
// //           return <Category meals={meals}key={meals.idMeal}/>
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

import React from 'react'
import Home from './components/Home'

export default function App() {
  return (
    <div className='home'>
      < Home />
    </div>
  )
}