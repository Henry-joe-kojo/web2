const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4100;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  console.log('Clinic contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Clinic backend running on port ${PORT}`);
}); 