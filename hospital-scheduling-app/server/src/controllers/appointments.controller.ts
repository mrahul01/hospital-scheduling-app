import { Request, Response } from 'express';
import Appointment from '../models/appointment.model';
import { SchedulingService } from '../services/scheduling.service';

const schedulingService = new SchedulingService();

export const bookAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData = req.body;
        const newAppointment = await schedulingService.bookAppointment(appointmentData);
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error });
    }
};

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await schedulingService.getAppointments();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

export const rescheduleAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointmentData = req.body;
        const updatedAppointment = await schedulingService.rescheduleAppointment(id, appointmentData);
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Error rescheduling appointment', error });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await schedulingService.cancelAppointment(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error canceling appointment', error });
    }
};