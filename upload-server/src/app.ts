import express from 'express';
import fileUpload from 'express-fileupload';
import { router } from './routes';

const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(router);

export { app };