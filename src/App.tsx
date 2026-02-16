import EventCard from "./EventCard";
import './App.css'

function App() {
  const Event = [
    {
    eventName: " Sports Fest",
    venue: " UB Gymnation" ,
    date: " February 14, 2027",
    organizer: " Ms. Rai, Sandara" ,
    capacity: 500 ,
    registeredStudents: ["Gadgad, Mara Syldeni ", "Opena, Maria Isabel ", "Topacio, Erika Mae "],
    }
  ]

  return (
    <>
    <section>
    <h1>"University Event Registration Dashboard"</h1>
    
    {Event.map((event, index) => (
        <EventCard
        key= {index}
        eventName={event.eventName}
        venue={event.venue}
        date={event.date}
        organizer={event.organizer}
        capacity={event.capacity}
        registeredStudents={event.registeredStudents}
     />   


      ))}
      </section>
      </>
    
  )
}

export default App
