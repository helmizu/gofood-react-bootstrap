import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Layout from '../components/Layout';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: 'calc(100vh - 60px)'}}>
        <h1 className="fw-bolder mb-4 d-inline-block align-center">
          <img
            alt=""
            src="/logo.png"
            height={48}
          />{" "}
          gofood
        </h1>
        <h2 className="mx-auto">{error.status} | {error.statusText}</h2>
        <Link to="/" className='btn btn-lg btn-danger rounded-pill mt-4'>Back to Home</Link>
      </div>
    </Layout>

  )
}

export default Error