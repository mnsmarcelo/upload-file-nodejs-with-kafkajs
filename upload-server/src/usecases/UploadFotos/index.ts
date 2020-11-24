import { PostPhotosKafka } from './PostPhotosKafka';
import { UploadPhotosController } from './UploadPhotosController';
import { WriteFile } from './WriteFile';

const postPhotosKafka = new PostPhotosKafka();
const writeFile = new WriteFile();

const uploadPhotosController = new UploadPhotosController(postPhotosKafka, writeFile);

export {
    uploadPhotosController
}