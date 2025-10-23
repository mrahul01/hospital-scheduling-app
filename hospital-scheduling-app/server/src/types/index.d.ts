// This file defines TypeScript types and interfaces used throughout the backend.

interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    contact: string;
    address: string;
}

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    contact: string;
}

interface Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    date: Date;
    time: string;
    status: 'scheduled' | 'completed' | 'canceled';
}

interface AuthPayload {
    username: string;
    password: string;
}

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}