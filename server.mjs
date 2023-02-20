/**
 *
 */
import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = 4000;

const staticFilePath = path.join(__dirname, './dist');

const application = express();
application.disable("x-powered-by");
application.use(express.static(staticFilePath));

application.get('/*', (req, res) => {
  res.sendFile(`${staticFilePath}/index.html`);
});

application.listen(port);
