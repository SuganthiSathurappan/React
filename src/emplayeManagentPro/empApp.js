import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Viewpage from "./viewDetails"
import AddUser from './addUser';
import EditUserForm from './editTable';
import AdminLogin from "./adminLogin"
import WithNavbar from './withNavbar';
import WithoutNavbar from './withoutNavbar';
import IdleLogout from './IdleLogout';


function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<WithoutNavbar />}>
                        <Route path="/" element={<AdminLogin />} />
                        <Route path="/adminLogin" element={<AdminLogin />} />
                    </Route>

                    <Route element={<WithNavbar />}>
                        <Route path="/viewDetails/:activePage" element={[<Viewpage />, <IdleLogout />]} />
                        <Route path="/viewDetails" element={[<Viewpage />, <IdleLogout />]} />
                        <Route path="/addUser" element={<AddUser />} />
                        <Route path="/editTable" element={<EditUserForm />} />
                    </Route>
                </Routes>

            </Router>
        </div >
    );
};

export default App;