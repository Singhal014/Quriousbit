import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import eventsData from '../data/events.json';
import './EventList.css';

function EventList() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [query, setQuery] = useState("");

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(query.toLowerCase()) ||
    event.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="event-list">
      <input 
        type="text" 
        placeholder="Search events..." 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <div className="event-grid">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default EventList;
