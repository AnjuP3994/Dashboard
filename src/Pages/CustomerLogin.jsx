import React, { useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'


function CustomerLogin({customerregister}) {

  const registerForm = customerregister? true : false

  const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:""
    })
    // console.log(userData);

    const handleRegister = async(e) => {
        e.preventDefault();
        // const {username,email,password} = userData
        if (!userData.username || !userData.email || !userData.password) {
            alert("Please fill the form with valid data.")
        } else {
            //to store the user data
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status==200) {
                alert(`${result.data.username} has been registered.`)
                setUserData({
                    username:"",
                    email:"",
                    password:""
                })
                navigate('/customerlogin')
            }
        }
    }

    const handleLogin = async(e)=>{
        e.preventDefault();
        if (!userData.email || !userData.password) {
            alert("Please fill the form with valid data.")
        } else {
            const result = await loginAPI(userData)
            console.log(result);
            if (result.status==200) {
                alert("Login Successfully.")
                //to set user details into sessionStorage
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                //to set token into sessionStorage
                sessionStorage.setItem("token",result.data.token)
                setUserData({
                    email:"",
                    password:""
                })
                navigate('/customerdashboard')
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

      <Row className='mt-4'>
        <Col className='d-flex justify-content-center align-items-center'>

          {/* Card */}
          <div className="card p-3 shadow">
            <Row>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <img src="https://pitchmark.net/client/images/img-12.png" width={'100%'} alt="" />
              </Col>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex justify-content-center flex-column text-center py-5'>
                <h1 className='text-primary'>Welcome Back!</h1>
                <h4 className='text-warning'>
                  {
                    registerForm? 'Sign up to your Account' : 'Sign in to your Account'
                  }
                </h4>
                <form className='mx-5'>
                  {
                    registerForm && 
                    <input type="text" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} placeholder='Enter your name' className='form-control my-3'/>
                  }
                  <input type="text" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} placeholder='Enter your email' className='form-control my-3'/>
                  <input type="password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} placeholder='Enter your password' className='form-control mb-3'/>
                  {
                    registerForm ?
                    <div>
                    <div className="text-center my-4">
                      <button onClick={handleRegister} className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p>Already have an Account? <Link to={'/customerlogin'} className='text-decoration-none'>Please Login Here</Link></p>
                    </div>
                    :
                    <div>
                    <div className="text-center my-4">
                      <button onClick={handleLogin} className='btn btn-primary'>Sign In</button>
                    </div>
                    <p>New to here? <Link to={'/customerregister'} className='text-decoration-none'>Please Register!</Link></p>
                    </div>
                  }
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

export default CustomerLogin






