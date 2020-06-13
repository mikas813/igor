import React from 'react';
import OurProject from '../components/OurProject';

function OurProjects() {

  return (
    <React.Fragment>
      <h2 className='text-center py-5'>Наші роботи</h2>
      <div className='container flex flex-wrap m-auto text-center p-5'>
        <OurProject/>
        <OurProject/>
        <OurProject/>
        <OurProject/>
        <OurProject/>
        <OurProject/>
        <OurProject/>
        <OurProject/>

      </div>
    </React.Fragment>
  );
}

export default OurProjects;