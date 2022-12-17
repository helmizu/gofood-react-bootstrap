import React from 'react'
import { Link } from 'react-router-dom';

const formatToIdr = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

const CardFood = ({ image = '/logo.png', name = 'Food', description = 'Food with secret sauce so delicious', price = "Rp 0", href = '#' }) => {
  return (
    <Link to={href}>
      <div className="card h-100">
        <div className="row">
          <div className="col">
            <div className="card-body">
              <h6 className="fw-bold">{name}</h6>
              <p className="card-text text-muted">{description}</p>
              <small className="fw-bold">{price}</small>
            </div>
          </div>
          <div className="col-auto">
            <div className="card-body">
              <img src={image} width={120} height={120} className="rounded bg-dark" alt="food image" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardFood