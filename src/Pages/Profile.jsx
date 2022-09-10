import React,{useEffect,useState} from "react";
import "assets/css/Profile.css";
import {Formik,Field,Form} from 'formik'
import { isExpired, decodeToken } from "react-jwt";



function Profile() {

    const [user,setUser] = useState({})

    useEffect(()=>
    {
        let x = JSON.parse(localStorage.getItem("URtoken"))
        const myDecodedToken = decodeToken(x);
        setUser(myDecodedToken)
    },[])




  return (
    <>
      <div className="vh-100 prof">
          <Formik
          initialValues={
              {
                  ename:"",
                  esurname:"",
                  eusername:""
              }
          }
          >
              <Form className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 prof-1">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom prof-name text-center text-white prof-2">
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className=" mb-3">
                          <h6>Name</h6>
                          <Field name='ename' className='edit-inp'/>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className=" mb-3">
                          <h6>Surname</h6>
                          <Field name='esurname' className='edit-inp'/>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className=" mb-3">
                          <h6>Username</h6>
                          <Field name='eusername' className='edit-inp'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <input className='prof-sub' value='Save Change' type="submit"/>

              </div>
              
            </div>
          </div>
     
              </Form>
          </Formik>
      </div>
    </>
  );
}

export default Profile;
