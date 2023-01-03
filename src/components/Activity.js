import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Modal, ModalBody, ModalHeader, Row, Col} from 'reactstrap'

export default function Activity() {
	const[modal, setmodal] = useState(false)

  return (
    <>
	    <div>
			<Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>
				<ModalHeader toggle={() => setmodal(!modal)}>Activity Form</ModalHeader>
				<ModalBody>
					<form>
						<Row>
						<Col lg={12}>
						<div className="form-floating mb-3">
                                <i className="icon fa-solid fa-person-walking fa-lg" ></i>
                                <input
                                type="text"
                                className="form-control" name="formId1" id="formId1" placeholder="Activity"/>
                                <label for="formId1">Activity</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <i className="icon fa-solid fa-pen-to-square fa-lg" ></i>
									<textarea class="form-control" placeholder="Description" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Description</label>
                                </div>

                                <div className="form-floating mb-3">
									<select class="form-select px-5" id="floatingSelect" placeholder="Description" aria-label="Floating label select example">
										<option selected>Choose activity</option>
										<option value="1">Running</option>
										<option value="2">Bicycle</option>
										<option value="1">Swimming</option>
										<option value="2">Walking</option>
										<option value="3">Hiking</option>
									</select>
									<label for="floatingSelect">Select activity</label>
                                    <i className="icon fa-solid fa-list-check fa-lg" ></i>
                                </div>

								<div className="form-floating mb-3">
                                    <i className="icon fa-solid fa-clock fa-lg" ></i>
									<input class="form-control" placeholder="Duration" id="floatingInput"/>
                                    <label for="floatingInput">Duration</label>
                                </div>

								<div class="form-floating mb-3">
								    <i className="icon fa-solid fa-calendar-days fa-lg" ></i>
									<input type="date" id="datepicker2" class="datepicker_input form-control" placeholder="DD/MM/YYYY" required/>
									<label for="datepicker2">Date</label>
								</div>

                                <div className="form-floating mb-3">
                                    <Link type="submit" className="btn-1 mt-3 mb-3 pt-3">Create Activity</Link>
                                </div>
								</Col>
						</Row>
					</form>
				</ModalBody>
			</Modal>
		</div>
		<div className="row my-5 activity-bg">
		

            <div className="col-sm-3 mt-5">
				<div className="card">
					<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Add new Activity</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="/#" className="btn btn-sm btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

            
            <div className="col-sm-3 mt-5">
				<div className="card">
					<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Add new Activity</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="/#" className="btn btn-sm btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

            <div className="col-sm-3 mt-5">
				<div className="card">
					<img src="https://source.unsplash.com/random/1920x1080" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Add new Activity</h5>
						<p className="card-text">Activity Description.</p>
						<p className="card-text">Activity Type.</p>
						<p className="card-text">Activity Duration.</p>
						<a href="/#" className="btn btn-sm btn-primary mx-3">Go somewhere</a>
						<a href="/#" className="btn btn-sm btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

            <div className="col-sm-3 mt-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Hi</h5>
						<p className="card-text"></p>
						<div className='text-center my-5 py-5'>
						<Link className="btn btn-lg btn-primary my-btn" onClick={() => setmodal(true)}>Add New Activity</Link>
						</div>
					</div>
				</div>
			</div>

		</div>
    </>
  )
}
