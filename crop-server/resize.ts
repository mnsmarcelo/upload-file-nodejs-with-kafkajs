import * as Jimp from 'jimp';

export const Resize = (fileName: string) => {
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
    const fileNameWithoutExtension = fileName.substr(0,fileName.lastIndexOf('.'));
    Jimp.read(`../tmp/${fileName}`, (err, image) => {
        if (err) throw err;
        image
            .resize(256, 256) // resize
            .quality(70) // set JPEG quality
            .write(`../resize/${fileNameWithoutExtension}-256x256.${fileExtension}`); // save
    });

    Jimp.read(`../tmp/${fileName}`, (err, image) => {
        if (err) throw err;
        image
            .resize(500, 500) // resize
            .quality(70) // set JPEG quality
            .write(`../resize/${fileNameWithoutExtension}-500x500.${fileExtension}`); // save
    });

    Jimp.read(`../tmp/${fileName}`, (err, image) => {
        if (err) throw err;
        image
            .resize(1000, 1000) // resize
            .quality(70) // set JPEG quality
            .write(`../resize/${fileNameWithoutExtension}-1000x1000.${fileExtension}`); // save
    });
}