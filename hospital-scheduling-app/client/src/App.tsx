import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PatientsList from './pages/Patients/PatientsList';
import PatientForm from './pages/Patients/PatientForm';
import DoctorsList from './pages/Doctors/DoctorsList';
import DoctorForm from './pages/Doctors/DoctorForm';
import BookAppointment from './pages/Appointments/BookAppointment';
import AppointmentList from './pages/Appointments/AppointmentList';
import RescheduleAppointment from './pages/Appointments/RescheduleAppointment';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/patients" exact component={PatientsList} />
        <Route path="/patients/new" component={PatientForm} />
        <Route path="/doctors" exact component={DoctorsList} />
        <Route path="/doctors/new" component={DoctorForm} />
        <Route path="/appointments" exact component={AppointmentList} />
        <Route path="/appointments/book" component={BookAppointment} />
        <Route path="/appointments/reschedule" component={RescheduleAppointment} />
      </Switch>
    </Router>
  );
};

export default App;