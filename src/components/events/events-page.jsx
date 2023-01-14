import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const EventsPage = ({data}) => {
    return(
        <div className='events-page'>
          {data.map(ev =>(
           <Link 
                legacyBehavior 
                key={ev.id} 
                href={`/events/${ev.id}`}>
            <a className='card'>
           <Image 
                width={300} 
                height={250} 
                src={ev.image} 
                alt={ev.title}/>
            <h2>{ev.title}</h2>
            </a>
           </Link>
          ))}
      </div>    
    )
}

export default EventsPage