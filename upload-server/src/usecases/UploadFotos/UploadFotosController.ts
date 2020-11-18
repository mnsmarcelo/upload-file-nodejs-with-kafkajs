import { UploadedFile } from 'express-fileupload';
import { Request, Response } from 'express';

import { PostPhotosKafka } from './PostPhotosKafka';
import { WriteFile } from './WriteFile';

export class UploadFotosController {
    constructor(
       private postPhotosKafka: PostPhotosKafka,
       private writeFile: WriteFile
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { photos } = request.files;

        Object.values(photos).map((file: UploadedFile) => {
            this.writeFile.write(file);
            this.postPhotosKafka.post(file.name);
        });

        return response.status(201).send();
    }

}