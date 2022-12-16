import React from 'react'
import CardRestaurant from '../components/CardRestaurant'
import Layout from '../components/Layout'

const Home = () => {
  const locationRef = React.useRef(null);
  return (
    <Layout>
      <div className='container-fluid'>
        <section className='d-flex flex-column justify-content-center align-items-center position-relative pb-4'>
          <div className="position-absolute w-100" style={{ zIndex: -1, top: 8, height: 360 }}>
            <img width="100%" height={360} className='rounded-4' src="/backdrop.jpeg" alt="background" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center pt-5 text-center">
            <img src='/logo.png' width={100} height={100} />
            <h1 className='my-3 fw-bold'>Good food. Anywhere. Anytime.</h1>
            <p style={{ width: 540 }} className='mb-3 fs-5'>We've got you covered. Just think about what you want to eat and drink, and we’ll get 'em to you.</p>
          </div>
          <div className='card border-light shadow-sm rounded-4 px-2' style={{ width: 540 }}>
            <div className='card-body p-4'>
              <h6 className='fw-bold'>Your Location</h6>
              <div className='d-flex'>
                <select size="lg" ref={locationRef} defaultValue="" aria-label="Default select example" className='form-select form-select-lg rounded-pill'>
                  <option value="" disabled>Enter Your Location</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Malang">Malang</option>
                </select>
                <button className='btn btn-primary btn-lg fw-bold rounded-pill ms-3'>Explore</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto py-4 text-center">
            <h1 className='fw-bold mb-3'>What’s good to eat?</h1>
            <p style={{ width: 540 }} className='mx-auto fs-5'>Discover our collection of popular dishes, local favorites, and best deals in your neighborhood.</p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant name="Aiola Eatery" />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
              <div className="col-6 col-md-4 col-xl-3 mb-4">
                <CardRestaurant />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home