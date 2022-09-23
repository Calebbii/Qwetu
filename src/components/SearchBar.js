import React from 'react'

export default function search() {
  return (
    <div>
        <form className='search' onSubmit={onSubmit}>
        <input
        type="text"
        placeholder='Enter Meal'
        value={query}
        onChange={(e) => setquery(e.target.value)}
        />

        <input type="submit" value="Search"/>

      </form>
    </div>
  )
}
