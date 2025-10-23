import mongoose, { Document, Schema } from 'mongoose';

export interface IDoctor extends Document {
    name: string;
    specialty: string;
    phone: string;
    email: string;
    availability: string[];
}

const DoctorSchema: Schema = new Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    availability: { type: [String], required: true }
});

export const Doctor = mongoose.model<IDoctor>('Doctor', DoctorSchema);