import { PostPhotosKafka } from './PostPhotosKafka';
import { UploadPhotosController } from './UploadPhotosController';
import { WriteFile } from './WriteFile';
import { TypeUpload } from '../../../avro/upload-schema';

const postPhotosKafka = new PostPhotosKafka();
const writeFile = new WriteFile();

const uploadPhotosController = new UploadPhotosController(postPhotosKafka, writeFile, TypeUpload);

export {
    uploadPhotosController
}