// Personal-Portfolio/server.js

import express from 'express';
import open from 'open';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  open(`http://localhost:${port}`);
});