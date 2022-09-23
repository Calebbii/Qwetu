import React, { useEffect } from 'react'
import Axios from "axios"
import { useState } from 'react';
import Category from './Category';
import '../style/home.css'

export default function Home() {


    const [query, setquery] = useState("Chicken")
    const [meals, setmenu] =  useState([])
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

  
    async function getMenu() {
      var result = await Axios.get(url);
      setmenu(result.data.meals);
      console.log(result.data.meals);
    }
    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.categories)
    //         setmenu(data.categories)
    //     })
    // },[])

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log (data)
            setmenu(data.meals)
        })
    },[])
  
    const onSubmit = (e) => {
      e.preventDefault();
      getMenu();
    }
  
    return (
      <div className="App" >
        <h1 >Qwetu Dishes</h1>
        <form className='search' onSubmit={onSubmit}>
          <input
          type="text"
          placeholder='Enter Meal'
          value={query}
          onChange={(e) => setquery(e.target.value)}
          />
  
          <input type="submit" value="Search"/>
  
        </form>
        {/* <div id='container'>
            <div className='category'>
                <img className="categoryImg" src={meals[0].strCategoryThumb}/>
                <h1 className='categoryName'>{meals.strMeal}</h1>
            </div>
        </div> */}
    
        <div className='cat'>
          {meals.map(meals => {
            return <Category meals={meals}key={meals.idMeal}/>
          })}
        </div>
      </div>
    );
}
