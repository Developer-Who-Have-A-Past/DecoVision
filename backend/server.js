const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('file'), (req,res)=>{
  const file = req.file;
  const imageUrl = `http://localhost:4000/${file.path}`;
  res.json({ id: Date.now().toString(), imageUrl });
});

app.post('/api/design', (req,res)=>{
  res.json({ status: 'ok', design: req.body });
});

app.listen(4000, ()=> console.log('Backend running on http://localhost:4000'));