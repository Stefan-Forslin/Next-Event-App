import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({data}) => {
  return( 
  <div className="homepage-container">
    {data?.map((ev) => (
      <Link
         className="card" 
         legacyBehavior  
         key={ev.id} 
         href={`/events/${ev.id}`}
         passHref>
       <a>
       <div className='image'>
       <Image 
         width={250} 
         height={250} 
         alt={ev.title} 
         src={ev.image}/>
        </div>
       <div className="content">
       <h2>{ev.title}</h2>
       <p>{ev.description}</p>
       </div>
      </a>
     </Link>
      ))}
 </div>
  )
};