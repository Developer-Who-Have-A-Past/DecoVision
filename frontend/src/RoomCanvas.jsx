import React from 'react';

export default function RoomCanvas({room}) {
  return (
    <div>
      <h2>Room Design</h2>
      <img src={room.imageUrl} alt="room" style={{maxWidth:'100%'}}/>
      <p>Drag & drop furniture (to be implemented)</p>
    </div>
  );
}