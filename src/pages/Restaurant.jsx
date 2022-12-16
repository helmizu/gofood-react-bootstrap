import React from 'react'
import Layout from '../components/Layout'
import { CircleFill, CurrencyDollar, GeoAltFill, HandThumbsUpFill, StarFill } from 'react-bootstrap-icons'
import CardFood from '../components/CardFood'

const Restaurant = () => {
  return (
    <Layout>
      <div className='container'>
        <section className='d-flex flex-column-reverse flex-md-row justify-content-between align-items-start py-4'>
          <div>
            <h2 className='mb-3'>Aiola Eatery</h2>
            <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center py-1'>
              <div className='badge d-flex align-items-center bg-warning rounded-pill p-2 fs-6 mb-2'><HandThumbsUpFill /><span className='mx-2'>Super Partner</span></div>
              <span className="fs-5 text-muted ms-2 mb-2">Snacks, Beverages, Rice</span>
            </div>
            <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center py-1'>
              <div className="d-inline-flex mb-2 align-items-center">
                <div className='badge d-flex align-items-center bg-info align-middle rounded-pill p-2 fs-6 text-dark'><CircleFill size={10} className='text-primary' /><span className='mx-2'>Open</span></div>
                <span className="fs-5 text-primary ms-2 fw-semibold">09:00-22:00</span>
              </div>
              <span className="fs-5 text-muted ms-2 mb-2">Jl. Slamet No.16, Genteng, Surabaya</span>
            </div>
            <div className="container">
              <div className="row py-1">
                <div className="col-6 col-md-3 text-center px-4 py-1 border-start">
                  <div className='d-flex justify-content-center align-items-center' style={{ height: 24 }}>
                    <StarFill color='gold' />
                    <span className="ms-1 fw-semibold text-truncate">4.6</span>
                  </div>
                  <small className='text-muted'>Ratings</small>
                </div>
                <div className="col-6 col-md-3 text-center px-4 py-1 border-start">
                  <div className='d-flex justify-content-center align-items-center' style={{ height: 24 }}>
                    <GeoAltFill color='red' />
                    <span className="ms-1 fw-semibold text-truncate">2.11 km</span>
                  </div>
                  <small className='text-muted'>Distance</small>
                </div>
                <div className="col-6 col-md-3 text-center px-4 py-1 border-start">
                  <div className='d-flex justify-content-center align-items-center' style={{ height: 24 }}>
                    <CurrencyDollar className="text-dark" />
                    <CurrencyDollar className="text-dark" />
                    <CurrencyDollar className="text-muted" />
                    <CurrencyDollar className="text-muted" />
                  </div>
                  <small className='text-muted'>Price</small>
                </div>
                <div className="col-6 col-md-3 text-center px-4 py-1 border-start">
                  <div className='d-flex justify-content-center align-items-center' style={{ height: 24 }}>
                    <HandThumbsUpFill color='red' />
                    <span className="ms-1 fw-semibold text-truncate">1k+ ratings</span>
                  </div>
                  <small className='text-muted'>Great Taste</small>
                </div>
              </div>
            </div>
          </div>
          <img className='rounded bg-dark p-4 mb-3' src='/restaurant.png' width={148} height={148} />
        </section>
        <div className='py-2 mb-3'>
          <hr width={200} className="mx-auto" />
        </div>
        <section>
          <div className='row'>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood name="Secret food with secret receipt" />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
            <div className="col-12 col-md-6 col-xl-4 mb-4">
              <CardFood />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Restaurant