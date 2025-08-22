import React from 'react';
import FullWidthTable from './Components/FullWidthTable';

const data = [
  {
    name: 'Aman Sharma',
    id: 'EMP001',
    department: 'Engineering',
    position: 'Developer',
    email: 'aman@example.com',
    phone: '9876543210',
    city: 'Delhi',
    country: 'India',
    joiningDate: '2021-05-10',
    salary: '₹8,00,000',
  },
  {
    name: 'Neha Singh',
    id: 'EMP002',
    department: 'HR',
    position: 'Manager',
    email: 'neha@example.com',
    phone: '9123456789',
    city: 'Mumbai',
    country: 'India',
    joiningDate: '2020-11-15',
    salary: '₹10,00,000',
  },
  {
    name: 'John Doe',
    id: 'EMP003',
    department: 'Marketing',
    position: 'Executive',
    email: 'john@example.com',
    phone: '9988776655',
    city: 'Bangalore',
    country: 'India',
    joiningDate: '2022-01-20',
    salary: '₹6,50,000',
  },
  {
    name: 'Priya Verma',
    id: 'EMP004',
    department: 'Design',
    position: 'UI/UX Designer',
    email: 'priya@example.com',
    phone: '9090909090',
    city: 'Pune',
    country: 'India',
    joiningDate: '2023-03-15',
    salary: '₹7,20,000',
  },
];

function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Employee Directory</h2>
      <FullWidthTable data={data} />
    </div>
  );
}

export default App;
