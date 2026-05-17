// Personal-Portfolio/server.js
import express from 'express';
import open from 'open';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Static serving configuration targeting primary local assets paths
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`🚀 Production compilation live at: http://localhost:${PORT}`);
  // Automated execution setup fires default engine instances across testing runtimes
  if (process.env.NODE_ENV !== 'production') {
    open(`http://localhost:${PORT}`);
  }
});