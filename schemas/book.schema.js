import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true
    },
    publishedDate: {
        date: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["PUBLISH", "NOT_PUBLISH"],
        default: "NOT_PUBLISH"
    },
    authors: {
        type: [String],
        required: true
    }
});

//bookSchema.index({ title: 'text', description: 'text', publishing_house: 'text' });

export const BookSchema = mongoose.model('BookSchema', bookSchema);