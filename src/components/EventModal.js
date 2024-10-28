import React from 'react';
import { motion } from 'framer-motion';
import './EventModal.css';

function EventModal({ event, onClose }) {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">X</button>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} />
      </motion.div>
    </motion.div>
  );
}

export default EventModal;
