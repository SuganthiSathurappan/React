import React from "react";

const Table = props => (
    <table className="table table-striped">
        <thead className="table-dark">
            <tr>
                <th>S.No</th>
                <th>Employee Name</th>
                <th>Email Address</th>
                <th>Mobile</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.tableData.length > 0 ? (
                props.tableData.map((data) => (

                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.fullName}</td>
                        <td>{data.emailAddress}</td>
                        <td>{data.mobile}</td>
                        <td>{data.department}</td>
                        <td><button className="button muted-button btn bg-success text-white "
                            onClick={() => { props.editRow(data) }}>Edit</button>

                            <button className="button muted-button btn bg-danger text-white ms-1"
                                onClick={() => props.deleteUser(data.id)}>Delete</button></td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default Table;