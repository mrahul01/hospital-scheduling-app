export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    contact: string;
    address: string;
}

export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    contact: string;
}

export interface Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    date: string;
    time: string;
    status: 'scheduled' | 'completed' | 'canceled';
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}