import React, { useEffect }  from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from '../actions/userActions';
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
    const userState = useSelector((state) => state.getAllUsersReducer);
    const { users } = userState;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers());
    }, [dispatch]);
  return (
      <>
        <br></br>
        <h2>UserList</h2>
        <br></br>
        <div className='container'>
          <div className="table">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
            </tbody>
        </Table>
        </div>
    </div>
    </>
  )
}

export default UserList