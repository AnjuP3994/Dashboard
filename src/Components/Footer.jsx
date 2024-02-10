import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
    <MDBFooter className='text-center bg-warning p-1 text-lg-left text-primary'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-primary text-decoration-none' href='!#'>
          Dashboard.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer