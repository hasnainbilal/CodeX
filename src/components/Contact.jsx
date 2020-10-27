import React, { useState } from 'react';

const Contact =  () => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });
    const inputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            }
        });
    }
    const submitCall = (e) =>{
        e.preventDefault();
        alert(`Thank you ${data.fullname}, Your form has been submitted`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submitCall}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="Hasnain Bilal" 
                                required
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent}    
                                />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="03443044657" 
                                required
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent}  />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="example@emaple.com" 
                                required
                                name="email"
                                value={data.email}
                                onChange={inputEvent}  />
                            </div>
                            
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                required
                                name="message"
                                value={data.message}
                                onChange={inputEvent} ></textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mt-5">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;