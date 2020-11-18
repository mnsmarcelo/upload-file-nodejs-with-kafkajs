import fs from 'fs';
import { app } from './app';

app.listen(3333, () => {
    if (!fs.existsSync('../tmp')){
        fs.mkdirSync('../tmp');
    }
});