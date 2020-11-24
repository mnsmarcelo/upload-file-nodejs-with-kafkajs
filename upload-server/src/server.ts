import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
import { app } from './app';

app.listen(process.env.EXPRESSJS_PORT, () => {
    console.log(`Running on ${process.env.EXPRESSJS_PORT}`)
    if (!fs.existsSync('../tmp')){
        fs.mkdirSync('../tmp');
    }
});