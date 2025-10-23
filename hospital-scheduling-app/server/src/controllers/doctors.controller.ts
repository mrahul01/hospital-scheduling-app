import { Request, Response } from 'express';
import Doctor from '../models/doctor.model';

// Get all doctors
export const getDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors', error });
    }
};

// Get a single doctor by ID
export const getDoctorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor', error });
    }
};

// Create a new doctor
export const createDoctor = async (req: Request, res: Response) => {
    const newDoctor = new Doctor(req.body);
    try {
        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(400).json({ message: 'Error creating doctor', error });
    }
};

// Update an existing doctor
export const updateDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: 'Error updating doctor', error });
    }
};

// Delete a doctor
export const deleteDoctor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting doctor', error });
    }
};