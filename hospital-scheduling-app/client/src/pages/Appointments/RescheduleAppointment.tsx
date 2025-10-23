import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const RescheduleAppointment = () => {
    const { appointmentId } = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState(null);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');

    useEffect(() => {
        const fetchAppointment = async () => {
            const response = await api.get(`/appointments/${appointmentId}`);
            setAppointment(response.data);
            setDate(response.data.date);
            setTime(response.data.time);
            setSelectedDoctor(response.data.doctorId);
        };

        const fetchDoctors = async () => {
            const response = await api.get('/doctors');
            setDoctors(response.data);
        };

        fetchAppointment();
        fetchDoctors();
    }, [appointmentId]);

    const handleReschedule = async (e) => {
        e.preventDefault();
        const updatedAppointment = { date, time, doctorId: selectedDoctor };

        await api.put(`/appointments/${appointmentId}`, updatedAppointment);
        navigate('/appointments');
    };

    if (!appointment) return <div>Loading...</div>;

    return (
        <div>
            <h2>Reschedule Appointment</h2>
            <form onSubmit={handleReschedule}>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Doctor:</label>
                    <select
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        required
                    >
                        {doctors.map((doctor) => (
                            <option key={doctor._id} value={doctor._id}>
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Reschedule</button>
            </form>
        </div>
    );
};

export default RescheduleAppointment;