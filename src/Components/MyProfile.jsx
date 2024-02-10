import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyProfile({insideDashboard}) {

    const [userDetails, setUserDetails] = useState("")

    useEffect(()=>{
      if ((sessionStorage.getItem("existingUser"))) {
        setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
      }
    },[])
    console.log(userDetails);

  return (
    <>
    <Header insideDashboard/>

    <div className="d-flex">
    <div class="sidebar bg-primary border border-secondary p-4 shadow d-flex flex-column" style={{width:'7cm', height:'17.7cm'}}>
        <Link to={'/customerdashboard'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">Home</Link>
        <Link to={'/myprofile'} class="text-decoration-none text-light mt-4 fs-5 fw-bolder ms-5">My Profile</Link>
    </div>

      <Container>
      <Row className='p-3 pt-4'>
        <Col xs={5}>
          <div className="card shadow">
            <div className="text-center mb-5">
                <img style={{width:'300px'}} src="https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-6922.jpg" alt="" />
                <h5 className='my-3'><b>Name:</b> {userDetails.username}</h5>
                <h5><b>Email:</b> {userDetails.email}</h5>
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

export default MyProfile