import path from 'path';
import fs from 'fs';

function buildPath() {
   return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData);
    return data;
}

export default function handler (req, res) {
    const {method} = req;


    const filePath = buildPath();
    const {events_categories, allEvents} = extractData(filePath);

     if(!allEvents) {
        return res.status(404).json({
          status: 404,
          message: 'You married into it.'
        })
     }

     if(method === 'POST') {
        const {email, eventId} = req.body;
      
      if( !email | !email.includes('@')) {
        res.status(422)
        .json({message: 'If the rule you followed, brought you to this. Of what use was the rule?'})
        return;  
      }

        const newAllEvents = allEvents.map((ev) => {
              if(ev.id === eventId) {
                if(ev.emails_registered.includes(email)){
                  res.status(201).json({message: "You've allready asked me that."});
                  return ev;
                }
               return {
                 ...ev, emails_registered:[...ev.emails_registered, email]
                }
              }
            return ev;
        });

        fs.writeFileSync(filePath, JSON.stringify({events_categories, 
         allEvents: newAllEvents}));

        res.status(201).json({message: `Well done. Don't put it into your poket: 
        ${email} for the event: ${eventId},`
    });
   }
}