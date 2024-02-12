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

    <div>
    <div class="sidebar bg-primary border border-secondary shadow">
        <Link to={'/customerdashboard'} id='a1' class="a text-decoration-none text-light fs-5 fw-bolder">Home</Link>
        <Link to={'/myprofile'} class="a text-decoration-none text-light mt-4 fs-5 fw-bolder">My Profile</Link>
    </div>

      <Container>
      <Row className='content'>
        <Col xs={5}>
          <div className="card shadow">
            <div className="text-center mb-5">
                <img style={{width:'100%'}} src="https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-6922.jpg" alt="" />
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