import React from 'react'
import { CurrencyDollar, GeoAltFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CardRestaurant = ({ image = '/restaurant.png', name = 'Restaurant', category = 'Snack, Noodles, Rice', priceRate = 2, href="/restaurant", distance = '0.1 km'}) => {
  return (
    <Link to={href}>
      <div className="card h-100">
        <div className='card-img-top p-2'>
          <img className="card-img-top rounded bg-dark img-cover" height={240} src={image} alt="image restaurants" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{category}</p>
          <div className="d-flex align-items-center">
            <div className="d-inline-flex align-items-center">
              <GeoAltFill size={14} color="red" />
              <small className='fw-semibold ms-1'>{distance}</small>
            </div>
            <span className='mx-2'>&#8226;</span>
            <div className="d-inline-flex align-items-center">
              <div className="d-inline-flex align-items-center">
                {Array.from({ length: priceRate }).map((_, idx) => (
                  <CurrencyDollar key={idx} className='text-dark' size={14} />
                ))}
                {Array.from({ length: 4 - priceRate }).map((_, idx) => (
                  <CurrencyDollar key={idx} className='text-muted' size={14} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardRestaurant