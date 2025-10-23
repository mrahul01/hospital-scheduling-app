import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Input from '../../components/Form/Input';

const DoctorForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState({ name: '', specialty: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchDoctor = async () => {
                const response = await api.get(`/doctors/${id}`);
                setDoctor(response.data);
                setIsEditing(true);
            };
            fetchDoctor();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({ ...doctor, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await api.put(`/doctors/${id}`, doctor);
        } else {
            await api.post('/doctors', doctor);
        }
        navigate('/doctors');
    };

    return (
        <div>
            <h2>{isEditing ? 'Edit Doctor' : 'Add Doctor'}</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    name="name"
                    label="Name"
                    value={doctor.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    name="specialty"
                    label="Specialty"
                    value={doctor.specialty}
                    onChange={handleChange}
                    required
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    value={doctor.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'} Doctor</button>
            </form>
        </div>
    );
};

export default DoctorForm;