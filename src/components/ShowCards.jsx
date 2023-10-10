import React from 'react';

const ShowCards = ({card}) => {
    const { id,image,title,price,description,descriptionTextCol,cardBg,titleTextcolor} = card || {}
    return (
        <div className="card w-96 h-120 bg-base-100 shadow-xl">
  <div className = " w-full h-fit "><img className = " "src= {image} alt="event's pic" /></div>
  <div className="card-body">
    <div className='flex gap-20'>
    <h2 className="card-title">{title}</h2>
    <p className='font-semibold text-2xl'>{price}</p>
    </div>
   
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">show More</button>
    </div>
  </div>
</div>



    );
};

export default ShowCards; 