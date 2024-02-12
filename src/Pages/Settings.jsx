import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'


function Settings({admindashboard}) {

  const [adminDetails, setAdminDetails] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    if ((sessionStorage.getItem("existingAdmin"))) {
      setAdminDetails(JSON.parse(sessionStorage.getItem("existingAdmin")))
    }
  },[])
  console.log(adminDetails);

  const [adminData, setAdminData] = useState({
    username:"",
    email:"",
    password:""
  })

  useEffect(()=>{
    setAdminData(adminDetails)
  },[adminDetails])

  const handleUpdate = () => {
    const updatedAdminDetails = { ...adminDetails, ...adminData };
    sessionStorage.setItem("existingAdmin", JSON.stringify(updatedAdminDetails));
      setAdminDetails(updatedAdminDetails);
      alert("Updated Successfully.")
      navigate('/admindashboard')
  }
  

  return (
    <>
    <Header admindashboard/>

    <div>
    <div class="sidebar bg-primary border border-secondary shadow">
        <Link to={'/admindashboard'} id='a1' class="a text-decoration-none text-light fs-5 fw-bolder">Home</Link>
        <Link to={'/settings'} class="a text-decoration-none text-light mt-4 fs-5 fw-bolder">Settings</Link>
    </div>

    <Container>
      <Row className='content'>
        <Col xs={5}>
          <h3 className='ms-2 fw-bolder mt-5'>Edit Admin Details</h3>
          <div className="card shadow mt-5 p-4" style={{width:'600px'}}>
            <Row>
                <Col className="text-center">
                  <img style={{width:'100%'}} src="https://png.pngtree.com/png-vector/20230313/ourmid/pngtree-female-admin-and-assistant-job-vacancies-vector-png-image_6646509.png" alt="" />
                </Col>
                <Col>
                  <label className='text-start fw-bolder mt-4'>Name</label>
                  <input onChange={(e) => setAdminData({ ...adminData, username: e.target.value })} value={adminData.username} type="text" className="form-control mb-3" />
                  <label className='text-start fw-bolder'>Email</label>
                  <input onChange={(e)=>setAdminData({ ...adminData, email: e.target.value })} value={adminData.email} type="text" className="form-control mb-3" />
                  <label className='text-start fw-bolder'>Password</label>
                  <input onChange={(e)=>setAdminData({ ...adminData, password: e.target.value })} value={adminData.password} type="text" className="form-control" />
                </Col> 
                <div className="text-center mb-4">
                  <button onClick={handleUpdate} className='btn btn-info fw-bolder mt-4'>Update</button>
                </div> 
            </Row>
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


