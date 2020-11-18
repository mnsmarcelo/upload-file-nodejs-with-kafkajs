import { Router } from 'express';
import { uploadPhotosController } from './usecases/UploadFotos';

const router = Router();

router.get('/', ((req, res) => res.send('ok')));

router.post('/upload', async (request, response) => {
    return uploadPhotosController.handle(request, response);
});

export { router };