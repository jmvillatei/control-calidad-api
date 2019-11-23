import {Request, Response} from 'express';

import Photo from '../models/Photo';

import path from 'path';
import fs from 'fs-extra';

// Upload Photo with details
export async function createPhoto(req: Request, res: Response): Promise<Response>{
    const {title, description} = req.body;
    console.log(req.file);
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    
    await photo.save();
    

    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}

// Show all photos
export async function getPhotos(req: Request, res: Response): Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
}

// show only one photo
export async function getPhoto(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const photo = await Photo.findById(id);
    return res.json(photo);
}

// delete photo
export async function deletePhoto(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const photo = await Photo.findByIdAndDelete(id);

    if(photo){
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo removed',
        photo
    });
}

// delete photo
export async function updatePhoto(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    //const {title, description, imagePath } = req.body;
    const {title, description } = req.body;

    const updatePhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    });

    return res.json({
        message: 'Photo removed',
        updatePhoto
    });
}