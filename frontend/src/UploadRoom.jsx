import React, { useState } from 'react';

export default function UploadRoom({onUploaded}) {
  const [file, setFile] = useState(null);
  async function upload(e) {
    e.preventDefault();
    if(!file) return;
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('http://localhost:4000/api/upload', { method: 'POST', body: form });
    const json = await res.json();
    onUploaded(json);
  }
  return (
    <form onSubmit={upload}>
      <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])}/>
      <button type="submit">Upload Room</button>
    </form>
  );
}