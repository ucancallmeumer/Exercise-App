import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-grey px-0 py-3">
      <div className="container-xl">
        <Link className="navbar-brand" to={'/home'}>
          <img src={logo} className="h-8" alt="..."/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
        
          <div className="navbar-nav mx-lg-auto">
            <Link className="nav-item nav-link" to='/home' aria-current="page">Home</Link>
            <Link className="nav-item nav-link" to='/activities'>Activities</Link>
            <Link className="nav-item nav-link" to='/Features'>Features</Link>
            <Link className="nav-item nav-link" to='/AboutUs'>Vision</Link>
          </div>

          <div className="navbar-nav ms-lg-4">
            <Link className="nav-item nav-link" to={'/signIn'}>Sign in</Link>
          </div>
          
          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <Link to={'/signUp'} className="btn btn-sm btn-primary w-full w-lg-auto">Register</Link>
          </div>
        </div>
      </div>
    </nav>
 
    </>
  )
}