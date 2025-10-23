import { body, validationResult } from 'express-validator';

export const validatePatient = [
    body('name').notEmpty().withMessage('Name is required'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('phone').optional().isMobilePhone().withMessage('Phone number is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateDoctor = [
    body('name').notEmpty().withMessage('Name is required'),
    body('specialty').notEmpty().withMessage('Specialty is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('phone').optional().isMobilePhone().withMessage('Phone number is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateAppointment = [
    body('patientId').notEmpty().withMessage('Patient ID is required'),
    body('doctorId').notEmpty().withMessage('Doctor ID is required'),
    body('date').isISO8601().withMessage('Date must be a valid date'),
    body('time').notEmpty().withMessage('Time is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];