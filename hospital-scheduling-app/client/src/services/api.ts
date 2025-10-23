import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
});

// Patient API calls
export const fetchPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const addPatient = async (patientData) => {
  const response = await api.post('/patients', patientData);
  return response.data;
};

export const updatePatient = async (id, patientData) => {
  const response = await api.put(`/patients/${id}`, patientData);
  return response.data;
};

export const deletePatient = async (id) => {
  const response = await api.delete(`/patients/${id}`);
  return response.data;
};

// Doctor API calls
export const fetchDoctors = async () => {
  const response = await api.get('/doctors');
  return response.data;
};

export const addDoctor = async (doctorData) => {
  const response = await api.post('/doctors', doctorData);
  return response.data;
};

export const updateDoctor = async (id, doctorData) => {
  const response = await api.put(`/doctors/${id}`, doctorData);
  return response.data;
};

export const deleteDoctor = async (id) => {
  const response = await api.delete(`/doctors/${id}`);
  return response.data;
};

// Appointment API calls
export const fetchAppointments = async () => {
  const response = await api.get('/appointments');
  return response.data;
};

export const bookAppointment = async (appointmentData) => {
  const response = await api.post('/appointments', appointmentData);
  return response.data;
};

export const rescheduleAppointment = async (id, appointmentData) => {
  const response = await api.put(`/appointments/${id}`, appointmentData);
  return response.data;
};

export const cancelAppointment = async (id) => {
  const response = await api.delete(`/appointments/${id}`);
  return response.data;
};