import { Router } from 'express';
import { uploadPhotosController } from './usecases/UploadFotos';

const router = Router();

const customCheckFiles = (req, res, next) => {
    const reqFiles = Object.keys(req.files).map(key => req.files[key])[0];
    const arrayFiles = (Array.isArray(reqFiles) ? reqFiles : [reqFiles]);

    const verifyMimetype = arrayFiles.filter((file) => !file.mimetype.match('image.*'));

    return verifyMimetype.length
        ? res.status(400).json({ error: 'Wrong image formats' })
        : next();
}

router.get('/', ((req, res) => res.send('ok')));

router.post('/upload', customCheckFiles, async (request, response) => {
    return uploadPhotosController.handle(request, response);
});

export { router };