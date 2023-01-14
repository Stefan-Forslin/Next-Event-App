import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    return(
      <div>
       <header>
        <div className='topNav'>
         <Image alt='logo' src={'/images/afs.png'} width={50} height={50}/>
        <nav>
         <ul>
          <li>
          <Link legacyBehavior href='/' passHref>
          <a> Home</a>
          </Link> 
          </li>
          <li>
          <Link legacyBehavior href='/events' passHref>
          <a> Events</a>
          </Link>
          </li>
          <li>
          <Link legacyBehavior href='/about-us' passHref>
          <a> About Us</a>
          </Link>
          </li>
         </ul>
        </nav>
        </div>
         <p className='title'>You should admit your situation. There would be more dignity in it.</p>
       </header>
      </div>
    )
};