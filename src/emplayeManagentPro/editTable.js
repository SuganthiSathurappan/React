import React, { useState } from 'react'
import Popup from './popUp';

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)
    const [isOpen, setIsOpen] = useState(true);
    const [errorMsg, setError] = useState({});
    const [selectImg, setSelectImg] = useState(null);

    const Depts = [
        { label: "Account", value: "Account" },
        { label: "Sales", value: "Sales" },
        { label: "Management", value: "Management" },
        { label: "IT", value: "IT" }
    ]

    console.log("enter edit")

    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log("edit close")
    }

    //****Select image ****/
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            var img = event.target.files[0];
            const { name } = event.target.files[0];
            setSelectImg(img);
            console.log(" setSelectImg ", img)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
        handleValidate(user)
    }

    /* =============F
           Check validate
           ==========*/

    const handleValidate = (user) => {

        /* Name Validate */
        var empName = user.fullName
        var letters = /^[A-Za-z]+$/;
        if (!empName.match(letters)) {
            errorMsg.fullName = "Please enter Alphabets only"
        }
        else
            errorMsg.fullName = ""

        /* =============
                 Validate Mobile Number
                 ==========*/
        var num = user.mobile
        if (num == '') {
            console.log("This is undefined");
        }
        else {
            if (isNaN(num)) {
                errorMsg.mobile = "Please enter Number only";
            } else if (num.length < 9) {
                errorMsg.mobile = "Please enter 10-digit number";
            }
            else {
                errorMsg.mobile = "";
            }

        }
    }

    return (
        <div>

            {isOpen && <Popup
                content={<>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            if (!user.fullName || !user.emailAddress || !user.mobile || !user.department)
                                return
                            if (!errorMsg.fullName && !errorMsg.mobile) {
                                props.updateUser(user.id, user)
                                props.addImage(selectImg)
                            }
                            else
                                return
                        }}
                    >
                        <div>
                            <h3>Edit Employee Details</h3>
                        </div>
                        <div className="col mt-4">
                            <input type="text" onChange={handleChange} value={user.fullName}
                                name="fullName" className="form-control" placeholder="Employee Name" />
                            {<p class="text-danger">{errorMsg.fullName}</p>}
                        </div >
                        <div className="col mt-4">
                            <input type="email" onChange={handleChange} value={user.emailAddress}
                                name="emailAddress" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="col mt-4">
                            <input type="text" onChange={handleChange} value={user.mobile}
                                name="mobile" className="form-control" placeholder="Mobile" />
                            {<p class="text-danger">{errorMsg.mobile}</p>}
                        </div>
                        <div className="col mt-4">
                            <Dropdown

                                label="Select Department"

                                options={Depts}

                                value={user.department}
                                name="department"

                                onChange={handleChange}

                            />
                        </div>
                        {/*}  <div className="col mt-4">
                            <input type="text" onChange={handleChange} value={user.department}
                                name="department" className="form-control" placeholder="Department" />
                    </div>*/}
                        <div className="col mt-4">
                            <input type="file" onChange={onImageChange}
                            />
                        </div>
                        <div className='mt-4'>
                            <button className='btn bg-primary ms-1'>Update user</button>
                            <button
                                onClick={() => props.setEditing(false)}
                                className="button muted-button btn bg-primary ms-1">
                                Cancel
                            </button>
                        </div>
                    </form>
                </>}
            />}
        </div>
    )
}
const Dropdown = ({ label, value, name, options, onChange }) => {

    return (
        <>
            <select name={name} value={value} onChange={onChange} className="form-select">
            <option >--Select Department--</option>
                {options.map((user) => (

                    <option value={user.value} > {user.label}</option>

                ))}

            </select>
        </>
    );
};
export default EditUserForm