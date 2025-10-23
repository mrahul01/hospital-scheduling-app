import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPatient, updatePatient, getPatientById } from '../../services/api';
import Input from '../../components/Form/Input';

const PatientForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        name: '',
        age: '',
        gender: '',
        contact: '',
        address: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchPatient = async () => {
                const data = await getPatientById(id);
                setPatient(data);
            };
            fetchPatient();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updatePatient(id, patient);
        } else {
            await createPatient(patient);
        }
        navigate('/patients');
    };

    return (
        <div>
            <h2>{isEditing ? 'Edit Patient' : 'Add Patient'}</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Age"
                    name="age"
                    type="number"
                    value={patient.age}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Gender"
                    name="gender"
                    value={patient.gender}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Contact"
                    name="contact"
                    value={patient.contact}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Address"
                    name="address"
                    value={patient.address}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'} Patient</button>
            </form>
        </div>
    );
};

export default PatientForm;