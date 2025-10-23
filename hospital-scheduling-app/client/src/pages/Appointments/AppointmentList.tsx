import React, { useEffect, useState } from 'react';
import { fetchAppointments } from '../../services/api';
import { Appointment } from '../../types';

const AppointmentList: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const data = await fetchAppointments();
                setAppointments(data);
            } catch (err) {
                setError('Failed to fetch appointments');
            } finally {
                setLoading(false);
            }
        };

        getAppointments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Appointment List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment._id}>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.doctorName}</td>
                            <td>{new Date(appointment.date).toLocaleDateString()}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;