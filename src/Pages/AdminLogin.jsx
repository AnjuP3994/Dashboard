import React, { useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { adminAPI } from '../Services/allAPI'


function AdminLogin() {

  const [adminData, setAdminData] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault();
    if (!adminData.email || !adminData.password) {
        alert("Please fill the form with valid data.")
    } else {
        const result = await adminAPI(adminData)
        console.log(result);
        if (result.status==200) {
            alert("Login Successfully.")
            //to set admin details into sessionStorage
            sessionStorage.setItem("existingAdmin",JSON.stringify(result.data.existingAdmin))
            //to set token into sessionStorage
            sessionStorage.setItem("token",result.data.token)
            setAdminData({
                email:"",
                password:""
            })
            navigate('/admindashboard')
        } 
        else {
            alert("Login Failed.")
        }
    }
}

  return (
    <>
    <Header/>
    <div className='container p-5'>
    {/* Back to Home */}
    <div className='mt-5 pt-5'>
      <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-solid fa-backward me-2"></i>Back to Home</Link>
    </div>

      <Row className='my-5'>
        <Col className='d-flex justify-content-center align-items-center'>
          <div className="card p-4 shadow">
            <Row>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <img src="https://pitchmark.net/client/images/img-12.png" width={'100%'} alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex justify-content-center flex-column text-center py-5'>
                <h1 className='text-primary'>Welcome Back!</h1>
                <h4 className='text-warning'>Sign in to your Account</h4>
                <form className='mx-5'>
                  <input type="text" value={adminData.email} onChange={e=>setAdminData({...adminData,email:e.target.value})} placeholder='Enter your email' className='form-control my-3'/>
                  <input type="password" value={adminData.password} onChange={e=>setAdminData({...adminData,password:e.target.value})} placeholder='Enter your password' className='form-control mb-3'/>
                    <div className="text-center my-4">
                      <button onClick={handleLogin} className='btn btn-primary'>Sign In</button>
                    </div>
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      
    </div>
    </>
  )
}

export default AdminLogin