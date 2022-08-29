import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <Link to='/getallusers'>Users</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/pizzaList'>Pizza List</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/addnewpizza'>Add Item</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/orderlist'>Orders</Link>
            </Nav.Item>
        </Nav>
</>
  )
}

export default AdminHeader