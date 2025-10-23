import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { api } from '../../services/api';
import { Appointment } from '../../types';

const BookAppointment: React.FC = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [patientName, setPatientName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await api.get('/doctors');
            setDoctors(response.data);
        };
        fetchDoctors();
    }, []);

    const handleDoctorChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDoctor(e.target.value);
        const response = await api.get(`/appointments/available-slots?doctorId=${e.target.value}`);
        setAvailableSlots(response.data);
    };

    const handleBookAppointment = async () => {
        if (!selectedSlot || !patientName) {
            setMessage('Please fill in all fields.');
            return;
        }

        const appointment: Appointment = {
            doctorId: selectedDoctor,
            slot: selectedSlot,
            patientName,
        };

        try {
            await api.post('/appointments', appointment);
            setMessage('Appointment booked successfully!');
            setSelectedSlot('');
            setPatientName('');
        } catch (error) {
            setMessage('Error booking appointment. Please try again.');
        }
    };

    return (
        <div>
            <h2>Book Appointment</h2>
            <div>
                <label htmlFor="doctor">Select Doctor:</label>
                <select id="doctor" value={selectedDoctor} onChange={handleDoctorChange}>
                    <option value="">Select a doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>
                            {doctor.name}
                        </option>
                    ))}
                </select>
            </div>
            {availableSlots.length > 0 && (
                <div>
                    <label htmlFor="slot">Select Slot:</label>
                    <select id="slot" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                        <option value="">Select a slot</option>
                        {availableSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div>
                <label htmlFor="patientName">Patient Name:</label>
                <input
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                />
            </div>
            <button onClick={handleBookAppointment}>Book Appointment</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookAppointment;