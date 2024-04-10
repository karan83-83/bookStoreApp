import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
    
    <div>
    <div className="card w-90 bg-base-100  dark:bg-slate-900 dark:text-white dark:border  shadow-xl ml-10 mt-10 hover:scale-105 duration-300">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="badge badge-outline">Buy now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
