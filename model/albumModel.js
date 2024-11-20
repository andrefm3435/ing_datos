//titulo, año, autor
import mongoose, { Schema } from "mongoose";
const albumSchema = new Schema({
    title: String, required: true,
    year: Number, required: true,
    autor: String, required: true
});

export const albumModel=new model('album',albumSchema);

