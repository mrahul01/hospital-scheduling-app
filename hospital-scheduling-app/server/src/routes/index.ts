import express from 'express';
import patientRoutes from './patients.routes';
import doctorRoutes from './doctors.routes';
import appointmentRoutes from './appointments.routes';

const router = express.Router();

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);

export default router;