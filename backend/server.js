require('dotenv').config(); // 👈 Sabse top pe hona chahiye

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Backend is working');
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
