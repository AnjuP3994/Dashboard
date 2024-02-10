import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'


function Settings({admindashboard}) {

  const [adminDetails, setAdminDetails] = useState("")

    useEffect(()=>{
      if ((sessionStorage.getItem("existingAdmin"))) {
        setAdminDetails(JSON.parse(sessionStorage.getItem("existingAdmin")))
      }
    },[])
    console.log(adminDetails);

  //create a state for holding values from the form details
  const [adminName, setAdminName] = useState('')
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPswd, setAdminPswd] = useState('')

  const displayData = () => {
    setAdminName(adminDetails.username);
    setAdminEmail(adminDetails.email);
    setAdminPswd(adminDetails.password);
  }

  useEffect(()=>{
    displayData()
  },[])

  const handleUpdate = () => {
    const updatedAdminDetails = { ...adminDetails, username: adminName, email: adminEmail, password: adminPswd };
    sessionStorage.setItem("existingAdmin", JSON.stringify(updatedAdminDetails));
    setAdminName(updatedAdminDetails.username);
    setAdminEmail(updatedAdminDetails.email);
    setAdminPswd(updatedAdminDetails.password);
    alert("Updated Successfully.")
  }
  

  return (
    <>
    <Header admindashboard/>

    <div className="d-flex">
    <div class="sidebar bg-primary border border-secondary p-4 shadow d-flex flex-column" style={{width:'7cm', height:'17.7cm'}}>
        <Link to={'/admindashboard'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">Home</Link>
        <Link to={'/settings'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">Settings</Link>
    </div>

    <Container>
      <Row className='p-3 pt-4 w-100'>
        <Col xs={5}>
          <h3 className='ms-2 fw-bolder'>Update Admin Details</h3>
          <div className="card shadow">
            <div className="mb-5">
                <div className='mx-5'>
                  <div className="text-center">
                    <img style={{width:'250px'}} src="https://png.pngtree.com/png-vector/20230313/ourmid/pngtree-female-admin-and-assistant-job-vacancies-vector-png-image_6646509.png" alt="" />
                  </div>
                  <label className='text-start fw-bolder'>Name</label>
                  <input onChange={(e)=>setAdminName(e.target.value)} value={adminName} type="text" class="form-control mb-3" />
                  <label className='text-start fw-bolder'>Email</label>
                  <input onChange={(e)=>setAdminEmail(e.target.value)} value={adminEmail} type="text" class="form-control mb-3" />
                  <label className='text-start fw-bolder'>Password</label>
                  <input onChange={(e)=>setAdminPswd(e.target.value)} value={adminPswd} type="text" class="form-control" />
                </div>
                <div className="text-center">
                  <button onClick={handleUpdate} className='btn btn-info px-4 fw-bolder fs-5 mt-4'>Update</button>
                </div>
            </div>
          </div>
        </Col>
        <Col xs={7}></Col>
      </Row>
    </Container>

    </div>
    
    </>
  )
}

export default Settings


