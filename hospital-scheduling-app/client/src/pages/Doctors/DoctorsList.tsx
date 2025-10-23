import React, { useEffect, useState } from 'react';
import { fetchDoctors } from '../../services/api';
import { Doctor } from '../../types';

const DoctorsList: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const data = await fetchDoctors();
                setDoctors(data);
            } catch (err) {
                setError('Failed to fetch doctors');
            } finally {
                setLoading(false);
            }
        };

        getDoctors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Doctors List</h1>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor._id}>
                        {doctor.name} - {doctor.specialty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorsList;