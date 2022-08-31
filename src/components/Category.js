import React from 'react'

export default function Category({meals}) {
  return (
    <div className='category'>
        <img className="categoryImg" src={meals["meals"]["strMealThumb"]}/>
        <p className='categoryName'>{meals["meals"]["srtCategory"]}</p>
    </div>
  )
}
