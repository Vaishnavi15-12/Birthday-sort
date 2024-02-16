import React from 'react'

const Person = ({name,age,image}) => {
  return (
   <article className='person'>
    <img src={image} className='img'></img> 
   <div>
   <h4>{name}</h4>
   <p>{age} years</p>
   </div>
   
</article>

  )
}

export default Person
