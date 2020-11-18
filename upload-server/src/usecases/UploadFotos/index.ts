import { PostPhotosKafka } from './PostPhotosKafka';
import { UploadFotosController } from './UploadFotosController';
import { WriteFile } from './WriteFile';

const postPhotosKafka = new PostPhotosKafka();
const writeFile = new WriteFile();

const uploadPhotosController = new UploadFotosController(postPhotosKafka, writeFile);

export {
    uploadPhotosController
}