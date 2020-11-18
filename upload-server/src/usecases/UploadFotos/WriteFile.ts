import fs from 'fs';
import { UploadedFile } from 'express-fileupload';

export class WriteFile {
    write (file: UploadedFile) {
        return fs.writeFileSync(`../tmp/${file.name}`, file.data);
    }
}