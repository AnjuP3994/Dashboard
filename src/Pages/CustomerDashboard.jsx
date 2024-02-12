import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap';


function CustomerDashboard({insideDashboard}) {
    
    const [weatherData, setWeatherData] = useState('');
  
    const api_key = "41711c6ba53b44e5c0727e9b7631de32";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=${api_key}`; 
      
    const fetchData = async()=>{
      const result = await fetch(url)
      .then(res=>res.json())
      .then(data=>setWeatherData(data))
    }
    console.log(weatherData);

    const [userName, setUserName] = useState("")

    useEffect(()=>{
      fetchData()
      if ((sessionStorage.getItem("existingUser"))) {
        setUserName(JSON.parse(sessionStorage.getItem("existingUser")))
      }
    },[])
    console.log(userName);
  
  
    //to get current date and time
    let today = new Date() //Date and Time
    let timestamp = new Intl.DateTimeFormat('en-us',{year: 'numeric', month: '2-digit', day: '2-digit', hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
    console.log(timestamp);


  return (
    <>
    <Header insideDashboard/>

    <div>
    <div class="sidebar bg-primary border border-secondary shadow">
        <Link to={'/customerdashboard'} id='a1' class="a text-decoration-none text-light fs-5 fw-bolder">Home</Link>
        <Link to={'/myprofile'} class="a text-decoration-none text-light mt-4 fs-5 fw-bolder">My Profile</Link>
    </div>

    <Container>
    <div className='content' >
        <h1 className='fw-bolder'>Welcome {userName.username}!</h1>
        {
            weatherData && 
            <div>
              <div>
              <p className='fs-5'><b><i className="fa-solid fa-location-dot me-1"></i>Location:</b> {weatherData.name}</p>
            </div>
            <div>
              <h5>Checkout the weather</h5>
              {/* Row */}
              <Row className='g-1'>

              {/* Col 1 */}
              <Col>
                <Card className='border border-3 border-dark text-info' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                  <img style={{height:'6.3cm'}} src="https://i.pinimg.com/564x/4b/6a/53/4b6a537ea9aeaf2cb55cc0843294e2f6.jpg" alt="" />
                  <Card.Body>
                    <Card.Text className='text-center'>
                      <p className="fs-4"><i className="fa-solid fa-location-dot me-2"></i>{weatherData.name}</p>
                      <h1 className='font mb-1 text-danger' style={{fontSize:'1.5cm'}}><img className='mb-2 me-1' style={{width:'40px'}} src="https://cdn-icons-png.flaticon.com/128/10766/10766489.png" alt="" />
                        {Math.round(weatherData.main.temp - 273.15)}<span className='font2 fs-1'>°C</span></h1>
                      <div id='cardbottom' className='font fs-5 mt-4 ms-2 d-flex justify-content-between'>
                        <p className='font2'>{weatherData.weather[0].description}</p>
                        <p>{timestamp}</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Col 1 */}

              {/* Col 2 */}
              <Col>
                
              {/* Row 1 */}
              <Row className="g-1">
              <Col>
              <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p><i class="fa-solid fa-water me-2 fs-5"></i>Humidity</p>
                  <h1 className='font mb-3 text-success'>{weatherData.main.humidity}<span className='font2 fs-5'>%</span></h1>
                  <p>Feels like: <span className='font'>{Math.round(weatherData.main.feels_like - 273.15)}°C</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p><i class="fa-solid fa-wind me-2 fs-5"></i>Wind</p>
                  <h1 className='font mb-3 text-success'>{weatherData.wind.speed}<span className='font2 fs-5'>km/hr</span></h1>
                  <p className='font'><i class="fa-solid fa-compass me-2"></i>{weatherData.wind.deg}deg</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              </Row>
              {/* Row 1 */}

              {/* Row 2 */}
              <Row className='g-1' style={{marginTop:'0.5px'}}>
              <Col>
              <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p>Visibility</p>
                  <h3 className='font mb-3'>{weatherData.visibility/1000}<span className='font2 fs-5'>km</span></h3>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className='border border-3 border-dark text-info text-center p-1' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p>Air Pressure</p>
                  <h3 className='font mb-3'>{weatherData.main.pressure}<span className='font2 fs-5'>hPa</span></h3>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              </Row>
              {/* Row 2 */}

              {/* Row 3 */}
              <Row className='g-1' style={{marginTop:'0.5px'}}>
              <Col>
              <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p>Min-Temp</p>
                  <h5 className='font mb-3'>{Math.round(weatherData.main.temp_min - 273.15)}°C</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p>Max-Temp</p>
                  <h5 className='font mb-3'>{Math.round(weatherData.main.temp_max - 273.15)}°C</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className='border border-3 border-dark text-info text-center p-2' style={{ width: '100%', backgroundColor:'rgb(0,0,0,0.900' }}>
                <Card.Body>
                  <Card.Text>
                  <p>Sea-Level</p>
                  <h5 className='font mb-3'>{weatherData.main.sea_level}hPa</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              </Row>
              {/* Row 3 */}

              </Col>
              {/* Col 2 */}

              </Row>
              {/* Row */}
            </div>
            </div>
        }
    </div>
    </Container>
    
    </div>
    </>
  )
}

export default CustomerDashboard