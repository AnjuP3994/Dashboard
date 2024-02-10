import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header({insideLandingPage, insideDashboard, admindashboard}) {

  const [logout, setLogout] = useState('');
  const [adminlogout, setAdminlogout] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setLogout(JSON.parse(sessionStorage.getItem("existingUser")));
    }
  }, []);
  
  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    setLogout('');
    navigate('/');
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem("existingAdmin");
    setAdminlogout('');
    navigate('/');
  }
  

  return (
    <>
    <Navbar className="bg-warning py-3">
          <Container>

          <Navbar.Brand href="/" className='fw-bolder text-primary fs-4'>
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-5.gif"
              width="50"
              className="d-inline-block align-top rounded-pill me-2"
            />{' '}
            Dashboard
          </Navbar.Brand>

          <Navbar.Toggle />

          {
            insideLandingPage && 
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
              <Dropdown.Toggle>
                <i class="fa-solid fa-user me-2"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><Link to={'/adminlogin'} className='text-decoration-none text-dark'>Admin Login</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/customerlogin'} className='text-decoration-none text-dark'>Customer Login</Link></Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          }

          {
            insideDashboard &&
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
              <Dropdown.Toggle>
                <i class="fa-solid fa-user me-2"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><Link to={'/myprofile'} className='text-decoration-none text-dark'>My Profile</Link></Dropdown.Item>
                <Dropdown.Item onClick={handleLogout} className='text-dark'>Logout</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          }

          {
            admindashboard &&
            <Navbar.Collapse className="justify-content-end">
              <button onClick={handleAdminLogout} className='btn btn-primary'>Logout</button>
            </Navbar.Collapse>
          }

          </Container>
      </Navbar>
    </>
  )
}

export default Header