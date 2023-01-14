
import EventsPage from '../../src/components/events/events-page';

const EventPage = ({data}) => {
    return(
      <div>
        <EventsPage data={data}/>
      </div>
    );
};
export default EventPage

export async function getStaticProps(){
    const {events_categories} = await import('/data/data.json')

    return{
        props:{
            data: events_categories,
        },
    };
}
