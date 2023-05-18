import React from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (localStorage.getItem('auth'))
            navigate('/adminLogin')
    },[])

    function handleClick() {
        var un = document.getElementById("uname").value
        var pwd = document.getElementById("pword").value
        if (un == 'admin' && pwd == 'admin') {
            navigate("/viewDetails")
            localStorage.setItem("auth", true)
        }
        else
            alert('Enter Correct Username and Password')
    }

    return (
        <>
            <div className="login-form-container">

                <form className="login-form">
                    <div className="login-form-content">
                        <h3>Admin Login</h3>
                        <hr />
                        <div className="form-group mt-3">
                            <label >User Name </label>
                            <input className="form-control mt-1" required id="uname"
                                type="text" name="username" placeholder="Enter UserName" ></input>
                        </div>
                        <div className="form-group mt-3">
                            <label>Password </label>
                            <input className="form-control mt-1" required id="pword"
                                type="password" name="password" placeholder="Enter Password"></input>
                        </div>
                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                Submit</button>
                        </div>

                    </div>
                </form>
            </div>

        </>
    )
}

export default Loginpage