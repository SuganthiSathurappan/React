import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "./table";
import AddUserForm from "./addUser";
import EditUserForm from "./editTable";

function Main() {

  const usersData = [
    { id: 1, fullName: 'Saran', emailAddress: 'saran@gmail.com', mobile: '9865327410', department: 'IT' },
    { id: 2, fullName: 'Balaji', emailAddress: 'balaji@gmail.com', mobile: '9368257014', department: 'CSE' },
    { id: 3, fullName: 'Kiran', emailAddress: 'kiran@gmail.com', mobile: '9638527410', department: 'Sales' },
  ]
  const initialFormState = { id: '', fullName: '', emailAddress: '', mobile: '', department: '' }
  const [tableData, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState(null)

  //setEditing(false)
  console.log('view = ', editing)

  /****---Parameter Passing--- */
  const { activePage } = useParams();
  var cc = activePage
  if (cc == '2')
    console.log(cc)


  /*****Display Image******/
  const addImage = (selectImg) => {

    console.log("diplay image")
    let imgUrl = URL.createObjectURL(selectImg);
    setFileUrl(imgUrl)
    console.log("fileUrl : ", fileUrl)
  }

  /*Add User*/
  const addUser = (user) => {
    console.log('Adduser = ', editing)
    user.id = tableData.length + 1

    var m = 0
    for (var i = 0; i < tableData.length; i++) {
      if (tableData[i].fullName == user.fullName || tableData[i].emailAddress == user.emailAddress
        || tableData[i].mobile == user.mobile) {
        console.log('same product not adding')
        m = m + 1
      }
      else {
        console.log('does no-t exist, am adding now')
      }
    }

    if (m == 0) {

      setUsers([...tableData, user])
      console.log("Added")

    }
    else {
      alert("Already Exist")
    }
  }


  /*Delete User*/
  const deleteUser = (id) => {
    console.log("index", id)

    setUsers(tableData.filter((user) => user.id !== id))

    console.log("deleted")
    setEditing(false)
  }

  /*Edit User*/
  const updateUser = (id, updatedUser) => {

    setEditing(false)
    console.log("updated = ", id)


    setUsers(tableData.map((user) => (user.id === id ? updatedUser : user)))

  }

  const editRow = (user) => {
    setEditing(true)
    console.log("edit open")

    setCurrentUser({
      id: user.id, fullName: user.fullName, emailAddress: user.emailAddress,
      mobile: user.mobile, department: user.department
    })
    console.log("edit open setediting = ", editing)
  }

  return (
    <React.Fragment>


      {editing ? (

        <div className="container my-4 p-5">
          <h3>View Employee Details</h3>
          <Table tableData={tableData} deleteUser={deleteUser} editRow={editRow} />
          <h2>Display image</h2>
          <img src={fileUrl} style={{ width: '80px', height: '80px' }} alt="No image" />
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            addImage={addImage}
          />
        </div>
      ) : (
        <div>
          {activePage == 2 ? (
            <div className="container my-4 p-5">

              <h3>View Employee Details</h3>
              <Table tableData={tableData} deleteUser={deleteUser} editRow={editRow} />
              <h2>Display image</h2>
              <img src={fileUrl} style={{ width: '80px', height: '80px' }} alt="No image" />
              <AddUserForm addUser={addUser} addImage={addImage} />
            </div>
          ) : (

            <div className="container my-4 p-5">
              <div>
                <h3>View Employee Details</h3>
                <Table tableData={tableData} deleteUser={deleteUser} editRow={editRow} />
              </div>
              <div>
                <h2>Display image</h2>
                <img src={fileUrl} style={{ width: '80px', height: '80px' }} alt="No image" />
              </div>
            </div>
          )
          }
        </div>
      )}

    </React.Fragment >
  );
}
export default Main;