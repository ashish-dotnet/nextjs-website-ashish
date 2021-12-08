import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

function EventDetailPage() {
    const router = useRouter();
    const eventId =  router.query.eventId;
    const eventData = getEventById(eventId);
    if(!eventData){
        return(
        <div><h1>No Data...!</h1>
        <Link href='/' >Back</Link>
        </div>
            )
    }
    return (<Fragment>
        <EventSummary title={eventData.title}></EventSummary>
        <EventLogistics 
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
        ></EventLogistics>
        <EventContent>
            <p>{eventData.description}</p>
        </EventContent>
    </Fragment>)
}
export default EventDetailPage;