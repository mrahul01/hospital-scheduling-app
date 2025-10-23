import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Hospital Scheduling System</h1>
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/patients">Patients</a></li>
                    <li><a href="/doctors">Doctors</a></li>
                    <li><a href="/appointments">Appointments</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;