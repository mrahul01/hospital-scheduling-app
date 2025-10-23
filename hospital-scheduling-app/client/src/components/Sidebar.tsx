import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Hospital Scheduling</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/patients">Patients</Link>
                </li>
                <li>
                    <Link to="/doctors">Doctors</Link>
                </li>
                <li>
                    <Link to="/appointments">Appointments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;