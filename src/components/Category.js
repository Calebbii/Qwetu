import React from 'react'
import '../style/category.css';

export default function Category({meals}) {
  return (
    <div id='container'>
      <div className='category' >
        <img className="categoryImg" src={meals.strMealThumb}/>
        <h1 className='categoryName'>{meals.strMeal}</h1>
      </div>
    </div>
    
  )
}
