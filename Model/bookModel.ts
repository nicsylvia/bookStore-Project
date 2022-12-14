import mongoose from "mongoose";

interface books{
    tittle: string,
    category: string,
    coverImage: string,
    summary: string,
    view: [],
    ISBN: string,
    author: string,
    authorImage: string
};

interface iBooks extends books, mongoose.Document{};

const bookSchema = new mongoose.Schema({
    tittle: String,
    category: String,
    coverImage: String,
    summary: String,
    view: String,
    ISBN: String,
    author: String,
    authorImage: String,
}, {timestamps: true});

export default mongoose.model<iBooks>("books collections", bookSchema)