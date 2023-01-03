import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/signIn.jpg'

export default function SignIn() {
  return (
    <section className="form my-4 mx-5">
            <div className="container-2">
                <div className="row no-gutters signIn-bg">

                    <div className="col-lg-6">
                        <div className="img-container">
                            <img src={image} className="img-fluid py-3" alt="exercise-gif"/> 
                        </div>
                    </div>

                    <div className="col-lg-6 px-5 pt-5">
                        <h4 font-weight-bold py-3>Log In to your account</h4>
                        <p>Welcome Back, To keep connect with us please login with personel info. If you don't have an account <Link to='/signup'>Sign Up here.</Link></p>
                        <form>

                            <div className="form-floating mb-3">
                                <i className="icon fa-solid fa-user fa-lg" ></i>
                              <input
                                type="text"
                                className="form-control" name="formId1" id="formId1" placeholder="Username / Email"/>
                              <label for="formId1">Username / Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                
                              <input
                                type="password"
                                className="form-control" name="formId3" id="formId3" placeholder="Password"/>
                              <label for="formId3">Password</label>
                              <i className="icon fa-solid fa-lock fa-lg" ></i>
                            </div>

                            <div className="form-floating mb-3">
                                <Link type="submit" className="btn-1 mt-3 mb-3 pt-3" to='/home'>Login</Link>
                              </div>

                              <input type="checkbox" name="field name" value="Initial value" className="mb-5 pb-2"></input><span> Agree to terms & conditions.</span>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

