import React, {useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SingleEvent = ({data}) => {
  const inputEmail = useRef();
  const router = useRouter();

  const [message, setMessage] = useState('')
  const onSubmit = async (e) => {

    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailValue.match(validRegex)) {
      setMessage("you're a bit deaf aren't you?")
    }

    try{
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailValue, eventId })
      });
      if(!response.ok) throw new Error(`Error: ${response.status}`);
     const data = await response.json();
     setMessage(data.message);
     inputEmail.current.value = '';
    }catch(e){

    }

  };
    return(
      <div className='event-single-page'>
        <Image 
         src={data.image}
         width={900}
         height={500}
         alt={data.title}
         />
       <h1>{data.title}</h1>
       <p>{data.description}</p>

       <form onSubmit={onSubmit} className='email-register'>
       <label>Call it. Call it? Yes.</label>

       <input 
          ref={inputEmail} 
          //type='email' 
          id='email' 
          placeholder='Just call it'/>
       <button type='submit'>submit</button>

       </form>
       <p>{message}</p>
    </div>
    )
};

export default SingleEvent;