import { UploadedFile } from 'express-fileupload';
import { Request, Response } from 'express';

import { PostPhotosKafka } from './PostPhotosKafka';
import { WriteFile } from './WriteFile';

export class UploadPhotosController {
    constructor(
       private postPhotosKafka: PostPhotosKafka,
       private writeFile: WriteFile
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { photos } = request.files;
        const arrayFiles: UploadedFile[] = (Array.isArray(photos) ? photos : [photos]);

        arrayFiles.map((file: UploadedFile) => {
            this.writeFile.write(file);
            this.postPhotosKafka.post(file.name);
        });

        return response.status(201).send();
    }

}