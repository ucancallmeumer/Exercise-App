import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../images/signUp.jpg';

export default function SignUp(){
    // const navigate=useNavigation();
    return(
        <>
            <section className="form my-4 mx-5">
                <div className="container-2">
                    <div className="row signUp-bg no-gutters">

                        <div className="col-lg-6">
                            <div className="img-container my-5">
                             <img src={img1} className="img-fluid py-3" alt="exercise-gif"/>  
                            </div>
                        </div>

                        <div className="col-lg-6 px-5 pt-5">
                            <h4 font-weight-bold py-3>CREATE A NEW ACCOUNT</h4>
                            <p>Come Join the Exercise Tracker! Let's setup your account. Already have one? <Link to='/signin'>Sign In here.</Link></p>
                            <form>

                                <div className="form-floating mb-3">
                                    <i className="icon fa-solid fa-user fa-lg" ></i>
                                <input
                                    type="text"
                                    className="form-control" name="formId1" id="formId1" placeholder="Username"/>
                                <label for="formId1">Username</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <i className="icon fa-solid fa-envelope fa-lg" ></i>
                                <input
                                    type="email"
                                    className="form-control" name="formId2" id="formId2" placeholder="Email"/>
                                <label for="formId2">Email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    
                                <input
                                    type="password"
                                    className="form-control" name="formId3" id="formId3" placeholder="Password"/>
                                <label for="formId3">Password</label>
                                <i className="icon fa-solid fa-lock fa-lg" ></i>
                                </div>

                                <div className="form-floating mb-3">
                                    <Link to='/signin' type="submit" className="btn-1 mt-3 mb-3 pt-3">Create Account</Link>
                                </div>

                                <input type="checkbox" name="field name" value="Initial value" className="mb-5 pb-2"></input><span> Agree to terms & conditions.</span>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}