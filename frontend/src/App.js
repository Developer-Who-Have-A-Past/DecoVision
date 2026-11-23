import React from 'react';
import UploadRoom from './UploadRoom';
import RoomCanvas from './RoomCanvas';

function App() {
  const [room, setRoom] = React.useState(null);
  return (
    <div>
      <h1>DecoVision</h1>
      {!room && <UploadRoom onUploaded={setRoom} />}
      {room && <RoomCanvas room={room} />}
    </div>
  );
}
export default App;