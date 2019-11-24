"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Photo_1 = __importDefault(require("../models/Photo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
// Upload Photo with details
async function createPhoto(req, res) {
    const { title, description } = req.body;
    console.log(req.file);
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
}
exports.createPhoto = createPhoto;
// Show all photos
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
// show only one photo
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
// delete photo
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndDelete(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Photo removed',
        photo
    });
}
exports.deletePhoto = deletePhoto;
// delete photo
async function updatePhoto(req, res) {
    const { id } = req.params;
    //const {title, description, imagePath } = req.body;
    const { title, description } = req.body;
    const updatePhoto = await Photo_1.default.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Photo removed',
        updatePhoto
    });
}
exports.updatePhoto = updatePhoto;
