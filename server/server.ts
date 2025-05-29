// server/server.ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Add your actual API routes here

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export {};
