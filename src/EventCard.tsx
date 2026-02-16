import StudentList from "./StudentList";
type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
    };

    const EventCard = ({
        eventName,
        venue,
        date,
        organizer,
        capacity,
        registeredStudents,
    }: EventProps) => {
        return ( 
            <>
            <h3>{eventName}</h3>
            <hr></hr>
            <p><strong>Venue:</strong>{venue}</p>
            <p><strong>Date:</strong>{date}</p>
            <p><strong>Organizer:</strong>{organizer}</p>
            <p><strong>Capacity: </strong>{capacity}</p>
            <p><strong>Registered students:</strong></p>
            <StudentList registeredStudents= {registeredStudents} />
        
            </>
        );
    };
    export default EventCard;