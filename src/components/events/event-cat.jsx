import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const EventCat = ({data,pageName}) => {
    return(
      <div className='cat-events'>
       <h1>Events in {pageName}</h1>
        <div className='content'>
        {data.map(ev => (
        <Link legacyBehavior 
              key={ev.id} 
              href={`/events/${ev.city}/${ev.id}`} 
              passHref={true}>
         <a className='card'>
          <Image 
                 width={200} 
                 height={200} 
                 alt={ev.title} 
                 src={ev.image}/>
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
         </a>
        </Link>
        ))}
      </div>
     </div>
    );
};

export default EventCat;