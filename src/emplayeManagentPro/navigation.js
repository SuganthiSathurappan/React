import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
    const navigate = useNavigate();
   const [logout, setLogout] = useState(false);
    const navigateEmpView = () => { navigate('/viewDetails'); };
    const navigateAdduser = () => { navigate('/viewDetails/2'); };

    React.useEffect(() => {
        if (!localStorage.getItem('auth'))
            navigate('/adminLogin')
    },[logout])

    const navigateLogout = () => {
        localStorage.removeItem("auth")
        setLogout(true)
      // navigate('/adminLogin');
    };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div class="container-fluid justify-content-center">
                    <button className="btn btn-outline-success text-white" onClick={navigateEmpView}>
                        Employee Details</button>
                    <button className="btn btn-outline-success text-white" onClick={navigateAdduser}>
                        Add Employee Details</button>
                    <button className="btn btn-outline-success text-white" onClick={navigateLogout}>
                        Logout</button>
                </div>
            </nav>
        </div>
    );
}

export default Home;


