import React from 'react'
import Header from './Header'
import { Col, Row } from 'react-bootstrap'

function LandingPage() {
  return (
    <>
    <Header insideLandingPage/>

    <div>
    <Row className='p-5' style={{margin:'50px'}}>
      <Col xs={12} sm={12} md={12} lg={6} xl={5} xxl={5}>
        <h1>Manage Your Dashbord</h1>
        <h6 style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro, non veniam similique quidem iure voluptatibus nobis cupiditate dolorum repudiandae qui magni dolore quae, blanditiis molestias maxime odit aliquid laudantium?
        Inventore odio, nulla harum dolorem officia magni distinctio at similique earum ipsum explicabo sunt, atque id et minima illum repellendus itaque soluta. Architecto explicabo pariatur aut reiciendis earum, atque a?
        Necessitatibus dolorem odio repellat placeat distinctio nemo laborum labore recusandae provident blanditiis, dicta corporis inventore in officia earum incidunt praesentium saepe. Quibusdam culpa similique sit qui quod, rerum aliquam autem?</h6>
        <div className='text-center mt-4'>
          <button className='btn btn-outline-primary'>Learn more</button>
        </div>
      </Col>

      <Col xs={12} sm={12} md={12} lg={6} xl={7} xxl={7}>
        <img width={'100%'} src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg" alt="" />
      </Col>
    </Row>
    </div>
    </>
  )
}

export default LandingPage