import { Appointment } from '../models/appointment.model';
import { Patient } from '../models/patient.model';
import { Doctor } from '../models/doctor.model';

export const scheduleAppointment = async (appointmentData) => {
    const appointment = new Appointment(appointmentData);
    return await appointment.save();
};

export const getAppointments = async () => {
    return await Appointment.find().populate('patient').populate('doctor');
};

export const rescheduleAppointment = async (appointmentId, updatedData) => {
    return await Appointment.findByIdAndUpdate(appointmentId, updatedData, { new: true });
};

export const cancelAppointment = async (appointmentId) => {
    return await Appointment.findByIdAndDelete(appointmentId);
};

export const getDoctorAppointments = async (doctorId) => {
    return await Appointment.find({ doctor: doctorId }).populate('patient');
};

export const getPatientAppointments = async (patientId) => {
    return await Appointment.find({ patient: patientId }).populate('doctor');
};