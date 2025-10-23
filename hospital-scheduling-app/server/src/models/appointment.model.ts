import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
    patientId: mongoose.Types.ObjectId;
    doctorId: mongoose.Types.ObjectId;
    appointmentDate: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}

const appointmentSchema: Schema = new Schema({
    patientId: { type: mongoose.Types.ObjectId, required: true, ref: 'Patient' },
    doctorId: { type: mongoose.Types.ObjectId, required: true, ref: 'Doctor' },
    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
}, {
    timestamps: true,
});

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;