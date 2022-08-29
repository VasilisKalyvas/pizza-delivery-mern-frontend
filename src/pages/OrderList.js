import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderAction";
import { Table, Button } from "react-bootstrap";

const OrderList = () => {

  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const {orders} = allOrdersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    console.log(orders);
  }, [dispatch]);

  return (
    <div>
    <br></br>
      <h2>Order Lists</h2>
      <br></br>
      <div className="table container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.orderAmount} $</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {" "}
                  {order.isDeliverd ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default OrderList;