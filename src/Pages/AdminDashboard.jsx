import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';


function AdminDashboard({admindashboard}) {

  const [adminDetails, setAdminDetails] = useState("")

    useEffect(()=>{
      if ((sessionStorage.getItem("existingAdmin"))) {
        setAdminDetails(JSON.parse(sessionStorage.getItem("existingAdmin")))
      }
    },[])
    console.log(adminDetails);

    
    const data = [
      { name: 'Palakkad', value: 400 },
      { name: 'Thrissure', value: 300 },
      { name: 'Idukki', value: 200 },
      { name: 'Kochi', value: 189 },
      { name: 'Calicut', value: 239 },
    ];

    const data1 = [
      { name: 'Quality Analyst', value: 300 },
      { name: 'Softeware Development', value: 500 },
      { name: 'Businuss Analyst', value: 200 },
    ];
    
    
    
  

  return (
    <>
    <Header admindashboard/>

    <div className="d-flex">
    <div class="sidebar bg-primary border border-secondary p-4 shadow d-flex flex-column" style={{width:'8.21cm', height:'17.7cm'}}>
        <Link to={'/admindashboard'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">Home</Link>
        <Link to={'/settings'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">Settings</Link>
    </div>

    <Container>
    <div className='py-4 px-3 pe-5 w-100'>
      <h1 className='fw-bolder'>Welcome {adminDetails.username}!</h1>
    </div>

    <div className='d-flex justify-content-between m-5'>
      <div>
        <h3>User's from:</h3>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>

      <div>
        <h3>User's Job:</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>

    </Container>

    </div>
    
    </>
  )
}

export default AdminDashboard


