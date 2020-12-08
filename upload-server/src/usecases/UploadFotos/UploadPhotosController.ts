import { Type } from 'avsc';
import { UploadedFile } from 'express-fileupload';
import { Request, Response } from 'express';

import { PostPhotosKafka } from './PostPhotosKafka';
import { WriteFile } from './WriteFile';

export class UploadPhotosController {
    constructor(
       private postPhotosKafka: PostPhotosKafka,
       private writeFile: WriteFile,
       private typeUpload: Type
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { photos } = request.files;
        const arrayFiles: UploadedFile[] = (Array.isArray(photos) ? photos : [photos]);

        arrayFiles.map((file: UploadedFile) => {
            this.writeFile.write(file);
            const buffer = this.typeUpload.toBuffer({ dir_file: file.name });
            this.postPhotosKafka.post(buffer);
        });

        return response.status(201).send();
    }

}