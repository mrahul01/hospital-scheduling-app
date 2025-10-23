import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../../services/api';
import { Patient } from '../../types';

const PatientsList: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPatients = async () => {
            try {
                const data = await fetchPatients();
                setPatients(data);
            } catch (err) {
                setError('Failed to fetch patients');
            } finally {
                setLoading(false);
            }
        };

        getPatients();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Patients List</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientsList;