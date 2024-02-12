import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import { PieChart, Pie } from 'recharts';


function AdminDashboard({admindashboard}) {

  const [adminDetails, setAdminDetails] = useState("")
  
  const [weatherData, setWeatherData] = useState('');
  const [weatherData1, setWeatherData1] = useState('');
  const [weatherData2, setWeatherData2] = useState('');
  const [weatherData3, setWeatherData3] = useState('');
  const [weatherData4, setWeatherData4] = useState('');
  const [weatherData5, setWeatherData5] = useState('');
  
    const api_key = "41711c6ba53b44e5c0727e9b7631de32";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=${api_key}`;
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=thrissur&appid=${api_key}`; 
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=palakkad&appid=${api_key}`;
    const url3 = `https://api.openweathermap.org/data/2.5/weather?q=trivandrum&appid=${api_key}`;
    const url4 = `https://api.openweathermap.org/data/2.5/weather?q=alappuzha&appid=${api_key}`;
    const url5 = `https://api.openweathermap.org/data/2.5/weather?q=calicut&appid=${api_key}`;
    
    //kochi weather data
    const fetchData = async()=>{
      const result = await fetch(url)
      .then(res=>res.json())
      .then(data=>setWeatherData(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData);
    //thrissur weather data
    const fetchData1 = async()=>{
      const result = await fetch(url1)
      .then(res=>res.json())
      .then(data=>setWeatherData1(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData1);
    //palakkad weather data
    const fetchData2 = async()=>{
      const result = await fetch(url2)
      .then(res=>res.json())
      .then(data=>setWeatherData2(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData2);
    //trivandrum weather data
    const fetchData3 = async()=>{
      const result = await fetch(url3)
      .then(res=>res.json())
      .then(data=>setWeatherData3(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData3);
    //alappuzha weather data
    const fetchData4 = async()=>{
      const result = await fetch(url4)
      .then(res=>res.json())
      .then(data=>setWeatherData4(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData4);
    //calicut weather data
    const fetchData5 = async()=>{
      const result = await fetch(url5)
      .then(res=>res.json())
      .then(data=>setWeatherData5(Math.round(data.main.temp - 273.15)))
    }
    console.log(weatherData5);

    useEffect(()=>{
      fetchData();
      fetchData1();
      fetchData2();
      fetchData3();
      fetchData4();
      fetchData5();
      if ((sessionStorage.getItem("existingAdmin"))) {
        setAdminDetails(JSON.parse(sessionStorage.getItem("existingAdmin")))
      }
    },[])
    console.log(adminDetails);

    
    const data = [
      { name: 'Palakkad', Temperature: weatherData2 },
      { name: 'Thrissur', Temperature: weatherData1 },
      { name: 'Calicut', Temperature: weatherData5 },
      { name: 'Kochi', Temperature: weatherData },
      { name: 'Alappuzha', Temperature: weatherData4 },
      { name: 'Trivandrum', Temperature: weatherData3 },
    ];

    const data1 = [
      { name: 'Quality Analyst', value: 300, fill: '#8884d8' },
      { name: 'Softeware Development', value: 350, fill: '#82ca9d' },
      { name: 'Businuss Analyst', value: 200, fill: '#ffc658' },
    ];
    
    

  return (
    <>
    <Header admindashboard/>

    <div>
    <div class="sidebar bg-primary border border-secondary shadow">
        <Link to={'/admindashboard'} id='a1' class="a text-decoration-none text-light fs-5 fw-bolder">Home</Link>
        <Link to={'/settings'} class="a text-decoration-none text-light mt-4 fs-5 fw-bolder">Settings</Link>
    </div>

    <Container>
      <div className='content'>
        <div>
          <h1 className='fw-bolder mt-5'>Welcome {adminDetails.username}!</h1>
        </div>

          <Row className='my-5 w-100'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <h3>Checkout the Temperature</h3>
            <BarChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value} °C`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Temperature" fill="#8884d8" />
            </BarChart>
          </Col>
          </Row>

          <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <h3>User's Job:</h3>
            <PieChart width={350} height={300}>
              <Pie
                data={data1}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </Col>
          </Row>
      </div>
    </Container>

    </div>
    
    </>
  )
}

export default AdminDashboard


