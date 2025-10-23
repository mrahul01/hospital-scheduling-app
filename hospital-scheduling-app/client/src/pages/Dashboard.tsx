import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { AppointmentSummary } from '../components/AppointmentSummary';
import { PatientSummary } from '../components/PatientSummary';
import { DoctorSummary } from '../components/DoctorSummary';

const Dashboard: React.FC = () => {
    const { data: appointments } = useFetch('/api/appointments');
    const { data: patients } = useFetch('/api/patients');
    const { data: doctors } = useFetch('/api/doctors');

    return (
        <div className="dashboard">
            <h1>Hospital Dashboard</h1>
            <div className="summary">
                <AppointmentSummary appointments={appointments} />
                <PatientSummary patients={patients} />
                <DoctorSummary doctors={doctors} />
            </div>
            <div className="actions">
                <Link to="/patients">Manage Patients</Link>
                <Link to="/doctors">Manage Doctors</Link>
                <Link to="/appointments/book">Book Appointment</Link>
            </div>
        </div>
    );
};

export default Dashboard;